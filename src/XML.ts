import destr from 'destr';
import { xml2json } from 'xml-js'

type JSONWithAttributes = {
    _text?: string;
    _attributes?: Record<string, string>;
    [key: string]: any;
};

class XML {

    static xmlToJsonDestr<T extends string>(value: T) {
        return this.transformJson(destr(xml2json(value, {
            compact: true,
            spaces: 4,
            ignoreComment: true,
            ignoreText: false,
        })))
    }

    static cleanJson(input: JSONWithAttributes): any {
        if (typeof input !== 'object' || input === null) return input;
        if ("_text" in input && Object.keys(input).length === 1) return input._text;

        if (Array.isArray(input)) {
            return input.map(item => this.cleanJson(item));
        }

        return Object.fromEntries(
            Object.entries(input)
            .filter(([key]) => !key.includes('_attributes'))
            .map(([key, value]) => [key, this.cleanJson(value)])
        )
    }

    static transformJson(input: Record<string, any>) {
        if (typeof input !== 'object' || input === null) return input;
        return Object.fromEntries(
            Object.entries(input)
            .filter(([key]) => !key.includes('_declaration'))
            .map(([key, value]) => [key, this.cleanJson(value)])
        )
    }

    static jsonToXml(json: any): string {
        const convert = (obj: any, indent: string = ""): string => 
            Object.entries(obj).map(([key, value]) =>
                Array.isArray(value) ? 
                    value.map(item => `\n${indent}<${key}>${convert(item, indent + "  ")}\n${indent}</${key}>`).join("") :
                    typeof value === "object" && value !== null ? 
                        `\n${indent}<${key}>${convert(value, indent + "  ")}\n${indent}</${key}>` :
                        `\n${indent}<${key}>${value}</${key}>`
            ).join("");
        
        const rootKey = Object.keys(json)[0];
        return `<${rootKey}>\n${convert(json[rootKey]).trim()}\n</${rootKey}>`;
    }
    
}

export default XML