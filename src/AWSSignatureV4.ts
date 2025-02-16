import axios, { type AxiosProgressEvent } from 'axios';
import XML from './XML';

type METHOD = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'
type HEADERS = Record<string, string>;
type PAYLOAD = Record<string, any>;

export class AWSSignatureV4Exception extends Error {
    code: number;
    response: string;
    type: string;
    constructor(message: string, code: number = 0, type: string = '', response: string = '') {
        super(message);
        this.name = 'AWSSignatureV4Exception';
        this.message = message;
        this.code = code;
        this.type = type;
        this.response = response;
    }
}

export interface AWSSignatureV4Context {
    readonly accessKeyId: string;
    readonly secretAccessKey: string;
    readonly region: string;
    readonly service: string;

    call<T>(
        method: METHOD,
        url: URL,
        headers?: HEADERS,
        params?: PAYLOAD,
        responseType?: 'json' | 'text' | 'arrayBuffer'
    ): Promise<T>;

    chunkedUpload(
        method: METHOD,
        url: URL,
        headers?: HEADERS,
        params?: PAYLOAD,
        onUploadProgress?: (progress: AxiosProgressEvent) => void
    ): Promise<number | undefined>;

    getPresignedUrl(
        method: METHOD,
        url: URL,
        expiresIn?: number
    ): Promise<URL>;
}

export class AWSSignatureV4 implements AWSSignatureV4Context {

    static CHUNK_SIZE = 1024 * 1024 * 5;

    readonly accessKeyId: string;
    readonly secretAccessKey: string;
    readonly region: string;
    readonly service: string;

    constructor(accessKeyId: string, secretAccessKey: string, region: string, service: string) {
        this.accessKeyId = accessKeyId;
        this.secretAccessKey = secretAccessKey;
        this.region = region;
        this.service = service;
    }

    private async HMAC(key: any, data: string): Promise<ArrayBuffer> {
        const cryptoKey = await crypto.subtle.importKey(
            'raw', key, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
        );
        return crypto.subtle.sign('HMAC', cryptoKey, new TextEncoder().encode(data));
    }

    private async HASH(data: string): Promise<string> {
        const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(data));
        return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    private async getSignatureKey(dateStamp: string): Promise<ArrayBuffer> {
        const key = new TextEncoder().encode('AWS4' + this.secretAccessKey);
        const kDate = await this.HMAC(key, dateStamp);
        const kRegion = await this.HMAC(kDate, this.region);
        const kService = await this.HMAC(kRegion, this.service);
        return this.HMAC(kService, 'aws4_request');
    }

    private async prepareRequestSign(method: METHOD, url: URL, headers: HEADERS = {}, params: PAYLOAD = {}) {
        const now = new Date();
        const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "");
        const dateStamp = amzDate.slice(0, 8);

        headers = Object.assign({}, headers, {
            host: url.host,
            'x-amz-content-sha256': 'UNSIGNED-PAYLOAD',
            'x-amz-date': amzDate,
        });

        let options: RequestInit = {
            method,
            headers
        }

        if (method === 'GET') {
            for (const [key, value] of Object.entries(AWSSignatureV4.flatten(params))) {
                if (!url.searchParams.has(key)) {
                    url.searchParams.append(key, value);
                }
            }
        } else {
            switch (headers['content-type']) {
                case 'application/json':
                    options.body = JSON.stringify(params);
                    break;
                case 'multipart/form-data':
                    const formData = new FormData();
                    for (const [key, value] of Object.entries(params)) {
                        if (value instanceof File) {
                            formData.append(key, value, value.name);
                        } else if (Array.isArray(value)) {
                            for (const nestedValue of value) {
                                formData.append(`${key}[]`, nestedValue);
                            }
                        } else {
                            formData.append(key, value);
                        }
                    }
                    options.body = formData;
                    delete headers['content-type'];
                    break;
                case 'application/xml':
                    options.body = XML.jsonToXml(params);
                    delete headers['content-type'];
                    break;
            }
        }

        const canonicalRequest = [
            method,
            url.pathname,
            url.searchParams.toString(),
            Object.keys(headers).sort().map(k => `${k.toLowerCase()}:${headers[k].trim()}\n`).join(""),
            Object.keys(headers).sort().join(";"),
            'UNSIGNED-PAYLOAD' // Empty payload hash
        ].join('\n');

        const credentialScope = `${dateStamp}/${this.region}/${this.service}/aws4_request`;
        const stringToSign = `AWS4-HMAC-SHA256\n${amzDate}\n${credentialScope}\n${await this.HASH(canonicalRequest)}`;
        const signingKey = await this.getSignatureKey(dateStamp);
        const signatureBuffer = await this.HMAC(signingKey, stringToSign);
        const signature = Array.from(new Uint8Array(signatureBuffer)).map(byte => byte.toString(16).padStart(2, "0")).join("");

        options.headers = Object.assign({}, options.headers, {
            authorization: `AWS4-HMAC-SHA256 Credential=${this.accessKeyId}/${credentialScope}, SignedHeaders=${Object.keys(headers).sort().join(";")}, Signature=${signature}`,
        })

        return { uri: url, options };
    }

    public async call(
        method: METHOD,
        url: URL,
        headers: HEADERS = {},
        params: PAYLOAD = {},
        responseType = 'json'
    ) {

        const { uri, options } = await this.prepareRequestSign(method, url, headers, params);

        let data: any = null;

        const response = await fetch(uri, options);

        if (response.headers.get('content-type')?.includes('application/json')) {
            data = await response.json();
        } else if (response.headers.get('content-type')?.includes('application/xml')) {
            data = XML.xmlToJsonDestr(await response.text())
        } else if (responseType === 'arrayBuffer') {
            data = await response.arrayBuffer()
        } else {
            data = await response.text();
        }

        if (400 < response.status) {
            throw new AWSSignatureV4Exception(data?.message, response.status, data?.Error.Code, data?.Error)
        }

        return data;
    }


    public async chunkedUpload(
        method: METHOD,
        url: URL,
        headers: HEADERS = {},
        params: PAYLOAD = {},
        onUploadProgress?: (progress: AxiosProgressEvent) => void,
    ) {
        const { uri, options } = await this.prepareRequestSign(method, url, headers, params);

        let file: File | undefined = undefined;

        if (typeof options.body !== 'undefined' && options.body instanceof FormData) {
            file = Object.values(params).find((value) => value instanceof File);
        }

        if (typeof file === 'undefined') {
            throw new Error('File not found!');
        }

        const response = await axios(uri.toString(), {
            method: options.method,
            headers: options.headers as Record<string, string>,
            data: file,
            onUploadProgress: onUploadProgress
        });

        return response.status === 200 ? 0 : undefined
    }

    public async getPresignedUrl(
        method: METHOD,
        url: URL,
        expiresIn: number = 900,
    ) {

        const now = new Date();
        const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "");
        const dateStamp = amzDate.slice(0, 8);

        const credentialScope = [
            dateStamp,
            this.region,
            this.service,
            'aws4_request',
        ].join('/')

        const params = {
            'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
            'X-Amz-Credential': `${this.accessKeyId}/${credentialScope}`,
            'X-Amz-Date': amzDate,
            'X-Amz-Expires': expiresIn.toString(),
            'X-Amz-SignedHeaders': 'host'
        };

        const { uri } = await this.prepareRequestSign(method, url, {}, params);

        const canonicalRequest = [
            method,
            uri.pathname,
            uri.searchParams.toString(),
            'host:' + url.host + '\n',
            'host',
            'UNSIGNED-PAYLOAD'
        ].join('\n')

        const stringToSign = [
            'AWS4-HMAC-SHA256',
            amzDate,
            credentialScope,
            await this.HASH(canonicalRequest)
        ].join('\n');

        const signingKey = await this.getSignatureKey(dateStamp);
        const signatureArrayBuffer = await this.HMAC(signingKey, stringToSign);
        const signature = Array.from(new Uint8Array(signatureArrayBuffer))
            .map((byte) => byte.toString(16).padStart(2, "0"))
            .join("");

        uri.searchParams.append('X-Amz-Signature', signature);

        return uri;
    }

    static flatten(data: PAYLOAD, prefix = ''): PAYLOAD {
        let output: PAYLOAD = {};
        for (const [key, value] of Object.entries(data)) {
            const finalKey = prefix ? prefix + `[${key}]` : key;
            if (Array.isArray(value)) {
                output = { ...output, ...AWSSignatureV4.flatten(value, finalKey) }
            } else {
                output[finalKey] = value;
            }
        }
        return output;
    }

    static replaceNegatif(payload?: Record<string, any>, prefix = '-') {

        if (!payload) return {};

        let output: Record<string, any> = {};

        for (const [key, value] of Object.entries(payload)) {
            const finalKey = prefix ? AWSSignatureV4.toKebabCase(key, prefix) : key;
            if (Array.isArray(value)) {
                output = { ...output, ...AWSSignatureV4.replaceNegatif(value, finalKey) }
            } else {
                output[finalKey] = value;
            }
        }

        return output;
    }

    static toKebabCase(str: string, prefix = '-'): string {
        return str
            .replace(/[\s_]+/g, `${prefix}`)                    // Ubah seluruh string menjadi huruf kecil
    }
}

export default AWSSignatureV4;