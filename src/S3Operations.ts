import AWSSignatureV4, { type AWSSignatureV4Context } from "./AWSSignatureV4";
import InputFile from "./InputFile.ts";
import type { Models } from "./Models.ts";
import XML from "./XML.ts";


export class S3Operations {

    private endpoint: string;
    private awssignaturev4: AWSSignatureV4Context;

    constructor(endpoint: string, awssignaturev4: AWSSignatureV4Context) {
        this.endpoint = endpoint;
        this.awssignaturev4 = awssignaturev4;
    }

    async abortMultipartUpload(Req: Models.Request.abortMultipartUpload) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key);
        uri.searchParams.append('UploadId=', Req.UploadId);
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {})
    }

    async completeMultipartUpload(Req: Models.Request.completeMultipartUpload) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key + '?uploadId=' + Req.UploadId);

        const payload: Record<'CompleteMultipartUpload', {
            Part: Array<{
                PartNumber?: any; 
                ETag?: string
                ChecksumSHA256?: string;
                ChecksumSHA1?: string;
                ChecksumCRC64NVME?: string;
                ChecksumCRC32C?: string;
                ChecksumCRC32?: string;
            }>
        }> = {
            CompleteMultipartUpload: {
                Part: []
            }
        }

        if (Req.Parts) {
            for (const value of Req.Parts) {
                payload.CompleteMultipartUpload.Part.push(value)
            }
        }

        const headers = {
            'content-type': 'application/xml',
            ...AWSSignatureV4.replaceNegatif(Req.Headers),
        }

        return this.awssignaturev4.call('POST', uri, headers, payload)
    }

    async copyObject(Req: Models.Request.copyObject) {
        const target = Req.TargetBucket + '/' + Req.TargetKey;
        const source = '/' + Req.Bucket + '/' + Req.Key;
        const uri = new URL(this.endpoint + '/' + target);
        const headers: Record<string, any> = {
            'x-amz-copy-source': source,
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        }
        return this.awssignaturev4.call('PUT', uri, headers, {})
    }

    async createBucket(Req: Models.Request.createBucket) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket);
        const headers: Record<string, any> = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('PUT', uri, headers, {})
    }

    async createBucketMetadataTableConfiguration(Req: Models.Request.createBucketMetadataTableConfiguration) {
        const uri = new URL(this.endpoint);
        uri.pathname = Req.Bucket;
        const headers = {
            'content-type': 'application/json',
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        }
        const payload = Req.Configuration;
        return this.awssignaturev4.call('POST', uri, headers, payload)
    }

    async createMultipartUpload(Req: Models.Request.createMultipartUpload) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key + '?uploads');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('POST', uri, headers);
    }

    async createSession(Req: Models.Request.createSession) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?session');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {});
    }

    async deleteBucket(Req: Models.Request.deleteBucket) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket);
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {});
    }

    async deleteBucketAnalyticsConfiguration(Req: Models.Request.deleteBucketAnalyticsConfiguration) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?analytics&id=' + Req.Id);
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {});
    }


    async deleteBucketCors(Req: Models.Request.deleteBucketCors) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?cors');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers)
        return this.awssignaturev4.call('DELETE', uri, headers, {})
    }

    async deleteBucketEncryption(Req: Models.Request.deleteBucketEncryption) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?encryption');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {})
    }

    async deleteBucketIntelligentTieringConfiguration(Req: Models.Request.deleteBucketIntelligentTieringConfiguration) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?intelligent-tiering&id=' + Req.Id);
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {})
    }

    async deleteBucketInventoryConfiguration(Req: Models.Request.deleteBucketInventoryConfiguration) {
        const uri  = new URL(this.endpoint + '/' + Req.Bucket + '/?inventory&id=' + Req.Id);
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {})
    }

    async deleteBucketLifecycle(Req: Models.Request.deleteBucketLifecycle) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?lifecycle');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {})
    }

    async deleteBucketMetadataTableConfiguration(Req: Models.Request.deleteBucketMetadataTableConfiguration) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?metadataTable');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {})
    }

    async deleteBucketMetricsConfiguration(Req: Models.Request.deleteBucketMetricsConfiguration) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?metrics&id=' + Req.Id);
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {})
    }

    async deleteBucketOwnershipControls(Req: Models.Request.deleteBucketOwnershipControls) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?ownershipControls')
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {})
    }

    async deleteBucketPolicy(Req: Models.Request.deleteBucketPolicy) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?policy')
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {})
    }

    async deleteBucketReplication(Req: Models.Request.deleteBucketReplication) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?replication')
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {})
    }

    async deleteBucketTagging(Req: Models.Request.deleteBucketTagging) {
        const uri = new URL(this.endpoint);
        uri.pathname = Req.Bucket;
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {})
    }

    async deleteBucketWebsite(Req: Models.Request.deleteBucketWebsite) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?website')
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {})
    }

    async deleteObject(Req: Models.Request.deleteObject) {
        const uri = new URL(this.endpoint);
        uri.pathname = Req.Bucket + '/' + Req.Key;

        if (Req.VersionId !== undefined) {
            uri.searchParams.append('versionId', Req.VersionId);
        }

        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {});
    }

    async deleteObjects(Req: Models.Request.deleteObjects) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?delete');
        
        let payload: Record<'Delete', {
            Object: Array<{
                Key: string; 
                ETag?: string;
                LastModifiedTime?: string;
                Size?: number;
                VersionId?: string;
            }>;
            Quiet?: boolean;
        }> = {
            Delete: {
                Object: [],
            }
        }

        for (const object of Object.values(Req.Objects)) {
            payload.Delete.Object.push(object);
        }

        if (Req.Quiet !== undefined) {
            payload.Delete.Quiet = Req.Quiet;
        }

        const headers = {
            'content-type': 'application/xml',
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        }

        return this.awssignaturev4.call('POST', uri, headers, payload)

    }

    async deleteObjectTagging(Req: Models.Request.deleteObjectTagging) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key + '?tagging');

        if (Req.VersionId !== undefined) {
            uri.searchParams.append('versionId', Req.VersionId);
        }

        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {})

    }

    async deletePublicAccessBlock(Req: Models.Request.deletePublicAccessBlock) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?publicAccessBlock');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('DELETE', uri, headers, {})
    }

    async getBucketAccelerateConfiguration(Req: Models.Request.getBucketAccelerateConfiguration) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?accelerate');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers)
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketAcl(Req: Models.Request.getBucketAcl) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?acl');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketAnalyticsConfiguration(Req: Models.Request.getBucketAnalyticsConfiguration) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?analytics&id=' + Req.Id);
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketCors(Req: Models.Request.getBucketCors) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?cors');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketEncryption(Req: Models.Request.getBucketEncryption) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?encryption');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketIntelligentTieringConfiguration(Req: Models.Request.getBucketIntelligentTieringConfiguration) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?intelligent-tiering&id=' + Req.Id);
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketInventoryConfiguration(Req: Models.Request.getBucketInventoryConfiguration) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?inventory&id=' + Req.Id);
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketLifecycle(Req: Models.Request.getBucketLifecycle) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?lifecycle');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketLifecycleConfiguration(Req: Models.Request.getBucketLifecycleConfiguration) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?lifecycle');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketLocation(Req: Models.Request.getBucketLocation) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?location');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketLogging(Req: Models.Request.getBucketLogging) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?logging');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketMetadataTableConfiguration(Req: Models.Request.getBucketMetadataTableConfiguration) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?metadataTable');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketMetricsConfiguration(Req: Models.Request.getBucketMetricsConfiguration) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?metrics&id=' + Req.Id);
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketNotification(Req: Models.Request.getBucketNotification) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?notification');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketNotificationConfiguration(Req: Models.Request.getBucketNotificationConfiguration) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?notification');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketOwnershipControls(Req: Models.Request.getBucketOwnershipControls) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?ownershipControls');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketPolicy(Req: Models.Request.getBucketPolicy) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?policy');
        const headers = {
            'content-type': 'application/json',
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        }
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketPolicyStatus(Req: Models.Request.getBucketPolicyStatus) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?policyStatus');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketReplication(Req: Models.Request.getBucketReplication) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?replication');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketRequestPayment(Req: Models.Request.getBucketRequestPayment) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?requestPayment');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketTagging(Req: Models.Request.getBucketTagging) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?tagging');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketVersioning(Req: Models.Request.getBucketVersioning) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?versioning');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getBucketWebsite(Req: Models.Request.getBucketWebsite) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?website');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getObject(Req: Models.Request.getObject) {
        const uri = new URL(this.endpoint);
        uri.pathname = Req.Bucket + '/' + Req.Key;
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {});
    }

    async getObjectAcl(Req: Models.Request.getObjectAcl) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key + '?acl')

        if (Req.VersionId !== undefined) {
            uri.searchParams.append('versionId', Req.VersionId)
        }
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers)
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getObjectAttributes(Req: Models.Request.getObjectAttributes) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key + '?attributes')

        if (Req.VersionId !== undefined) {
            uri.searchParams.append('versionId', Req.VersionId)
        }
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers)
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getObjectLegalHold(Req: Models.Request.getObjectLegalHold) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key + '?legal-hold')

        if (Req.VersionId !== undefined) {
            uri.searchParams.append('versionId', Req.VersionId)
        }

        const headers = AWSSignatureV4.replaceNegatif(Req.Headers)
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getObjectLockConfiguration(Req: Models.Request.getObjectLockConfiguration) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?object-lock');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getObjectRetention(Req: Models.Request.getObjectRetention) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key + '?retention')

        if (Req.VersionId !== undefined) {
            uri.searchParams.append('versionId', Req.VersionId)
        }

        const headers = AWSSignatureV4.replaceNegatif(Req.Headers)
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getObjectTagging(Req: Models.Request.getObjectTagging) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key + '?tagging');

        const payload: Record<string, any> = {}

        if (Req.VersionId !== undefined) {
            payload['versionId'] = Req.VersionId;
        }

        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, payload)
    }

    async getObjectTorrent(Req: Models.Request.getObjectTorrent) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key + '?torrent');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async getPublicAccessBlock(Req: Models.Request.getPublicAccessBlock) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?publicAccessBlock');
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async headBucket(Req: Models.Request.headBucket) {
        const uri = new URL(this.endpoint);
        uri.pathname = Req.Bucket;
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('HEAD', uri, headers)
    }

    async headObject(Req: Models.Request.headObject) {
        const uri = new URL(this.endpoint);
        uri.pathname = Req.Bucket + '/' + Req.Key;

        if (Req.MetaObject) {
            const meta = Req.MetaObject;
            if (meta.partNumber !== undefined) {
                uri.searchParams.append('partNumber', meta.partNumber);
            }
            if (meta.ResponseCacheControl !== undefined) {
                uri.searchParams.append('response-cache-control', meta.ResponseCacheControl);
            }
            if (meta.ResponseContentDisposition !== undefined) {
                uri.searchParams.append('response-content-disposition', meta.ResponseContentDisposition);
            }
            if (meta.ResponseContentEncoding !== undefined) {
                uri.searchParams.append('response-content-encoding', meta.ResponseContentEncoding);
            }
            if (meta.ResponseContentLanguage !== undefined) {
                uri.searchParams.append('response-content-language', meta.ResponseContentLanguage);
            }
            if (meta.ResponseContentType !== undefined) {
                uri.searchParams.append('response-content-type', meta.ResponseContentType);
            }
            if (meta.ResponseExpires !== undefined) {
                uri.searchParams.append('response-expires', meta.ResponseExpires);
            }
            if (meta.VersionId !== undefined) {
                uri.searchParams.append('versionId', meta.VersionId);
            }
        }

        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);

        return this.awssignaturev4.call('HEAD', uri, headers)
    }

    async listBucketAnalyticsConfigurations(Req: Models.Request.listBucketAnalyticsConfigurations) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/analytics');

        if (Req.ContinuationToken !== undefined) {
            uri.searchParams.append('continuation-token', Req.ContinuationToken);
        }
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {});
    }

    async listBucketIntelligentTieringConfigurations(Req: Models.Request.listBucketIntelligentTieringConfigurations) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/intelligent-tiering');

        if (Req.ContinuationToken !== undefined) {
            uri.searchParams.append('continuation-token', Req.ContinuationToken);
        }
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {});
    }

    async listBucketInventoryConfigurations(Req: Models.Request.listBucketInventoryConfigurations) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/inventory');

        if (Req.ContinuationToken !== undefined) {
            uri.searchParams.append('continuation-token', Req.ContinuationToken);
        }
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {});
    }

    async listBucketMetricsConfigurations(Req: Models.Request.listBucketMetricsConfigurations) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/metrics');

        if (Req.ContinuationToken !== undefined) {
            uri.searchParams.append('continuation-token', Req.ContinuationToken);
        }
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, {});
    }

    async listBuckets(Req?: Models.Request.listBuckets) {
        const uri = new URL(this.endpoint);
        const headers = AWSSignatureV4.replaceNegatif(Req?.Headers)
        return this.awssignaturev4.call('GET', uri, headers, {})
    }

    async listDirectoryBuckets(Req: Models.Request.listDirectoryBuckets) {
        const uri = new URL(this.endpoint);

        let payload: Record<string, any> = {};

        if (Req.ContinuationToken !== undefined) {
            payload['continuation-token'] = Req.ContinuationToken;
        }
        if (Req.MaxDirectoryBuckets !== undefined) {
            payload['max-directory-buckets'] = Req.MaxDirectoryBuckets;
        }
        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, payload);
    }

    async listMultipartUploads(Req: Models.Request.listMultipartUploads) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?uploads');
        let payload: Record<string, any> = {};

        if (Req.Delimiter !== undefined) {
            payload['delimiter'] = Req.Delimiter;
        }

        if (Req.EncodingType !== undefined) {
            payload['encoding-type'] = Req.EncodingType;
        }

        if (Req.KeyMarker !== undefined) {
            payload['key-marker'] = Req.KeyMarker;
        }

        if (Req.MaxUploads !== undefined) {
            payload['max-uploads'] = Req.MaxUploads;
        }

        if (Req.Prefix !== undefined) {
            payload['prefix'] = Req.Prefix;
        }

        if (Req.UploadIdMarker !== undefined) {
            payload['upload-id-marker'] = Req.UploadIdMarker;
        } 

        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, payload)
    }

    /**
     * @deprecated
     * This function is deprecated. Use `listObjectsV2()` instead.
     */
    async listObjects() {
        console.warn("listObjects() is deprecated. Please use listObjectsV2() instead.");
    }

    async listObjectsV2(Req: Models.Request.listObjectsV2) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket);
        const payload: Record<string, any> = {}

        if (Req.ListType !== undefined) {
            payload['list-type'] = Req.ListType;
        }

        if (Req.ContinuationToken !== undefined) {
            payload['continuation-token'] = Req.ContinuationToken;
        }

        if (Req.Delimiter !== undefined) {
            payload['delimiter'] = Req.Delimiter;
        }

        if (Req.EncodingType !== undefined) {
            payload['encoding-type'] = Req.EncodingType;
        }

        if (Req.FetchOwner !== undefined) {
            payload['fetch-owner'] = Req.FetchOwner;
        }

        if (Req.MaxKeys !== undefined) {
            payload['max-keys'] = Req.MaxKeys;
        }

        if (Req.Prefix !== undefined) {
            payload['prefix'] = Req.Prefix;
        }

        if (Req.StartAfter !== undefined) {
            payload['start-after'] = Req.StartAfter;
        }

        const headers: Record<string, any> = AWSSignatureV4.replaceNegatif(Req.Headers);

        return this.awssignaturev4.call('GET', uri, headers, payload);

        // New implementation
    }

    async listObjectVersions(Req: Models.Request.listObjectVersions) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket);
        const payload: Record<string, any> = {};

        if (Req.Delimiter !== undefined) {
            payload['delimiter'] = Req.Delimiter;
        }

        if (Req.EncodingType !== undefined) {
            payload['encoding-typ'] = Req.EncodingType;
        }

        if (Req.KeyMarker !== undefined) {
            payload['key-marker'] = Req.KeyMarker;
        }

        if (Req.MaxKeys !== undefined) {
            payload['max-keys'] = Req.MaxKeys;
        }

        if (Req.Prefix !== undefined) {
            payload['prefix'] = Req.Prefix;
        }

        if (Req.VersionIdMarker !== undefined) {
            payload['version-id-marker'] = Req.VersionIdMarker
        }

        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);
        return this.awssignaturev4.call('GET', uri, headers, payload);
    }

    async listParts(Req: Models.Request.listParts) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key);
        const payload: Record<string, any> = {}

        if (Req.UploadId !== undefined) {
            payload['uploadId'] = Req.UploadId;
        }

        if (Req.MaxParts !== undefined) {
            payload['max-parts'] = Req.MaxParts;
        }

        if (Req.PartNumberMarker !== undefined) {
            payload['part-number-marker'] = Req.PartNumberMarker;
        }

        const headers = AWSSignatureV4.replaceNegatif(Req.Headers);

        return this.awssignaturev4.call('GET', uri, headers, payload)
    }

    async putBucketAccelerateConfiguration() { }
    async putBucketAcl() { }
    async putBucketAnalyticsConfiguration() { }
    async putBucketCors() { }
    async putBucketEncryption() { }
    async putBucketIntelligentTieringConfiguration() { }
    async putBucketInventoryConfiguration() { }
    async putBucketLifecycle() { }
    async putBucketLifecycleConfiguration() { }
    async putBucketLogging() { }
    async putBucketMetricsConfiguration() { }
    async putBucketNotification() { }
    async putBucketNotificationConfiguration() { }
    async putBucketOwnershipControls() { }
    async putBucketPolicy() { }
    async putBucketReplication() { }
    async putBucketRequestPayment() { }

    async putBucketTagging(Req: Models.Request.putBucketTagging) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?tagging');
        let payload: Record<'Tagging', {
            TagSet: {
                Tag: Array<{
                    Key: string;
                    Value: string;
                }>
            }
        }> = {
            Tagging: {
                TagSet: {
                    Tag: Req.Tagging.TagSet
                }
            }
        }

        const headers = {
            'content-type': 'application/xml',
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        }

        return this.awssignaturev4.call('PUT', uri, headers, payload)

    }

    async putBucketVersioning(Req: Models.Request.putBucketVersioning) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '?versioning');

        const payload: Record<'VersioningConfiguration', Record<string, any>> = {
            VersioningConfiguration: {}
        }

        if (Req.Status) {
            payload.VersioningConfiguration['Status'] = Req.Status;
        }

        if (Req.MFADelete !== undefined) {
            payload.VersioningConfiguration['MFADelete'] = Req.MFADelete
        }

        const headers = {
            'content-type': 'application/xml',
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        }

        return this.awssignaturev4.call('PUT', uri, headers, payload)
    }

    async putBucketWebsite(Req: Models.Request.putBucketWebsite) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?website');
        let payload: Record<'WebsiteConfiguration', {
            ErrorDocument?: { Key: string },
            IndexDocument?: { Suffix: string },
            RedirectAllRequestsTo?: {
                HostName: string;
                Protocol: string;
            },
            RoutingRules?: {
                RoutingRule: Array<{
                    Condition?: {
                        HttpErrorCodeReturnedEquals?: string;
                        KeyPrefixEquals?: string;
                    },
                    Redirect?: {
                        HostName?: string;
                        HttpRedirectCode?: string;  
                        Protocol?: 'http' | 'https';
                        ReplaceKeyPrefixWith?: string;
                        ReplaceKeyWith?: string;
                    }
                }>
            }
        }> = {
            WebsiteConfiguration: {
               
            },
        }

        if (Req.ErrorDocument !== undefined && typeof payload.WebsiteConfiguration.ErrorDocument === 'undefined') {
            payload.WebsiteConfiguration.ErrorDocument = Req.ErrorDocument;
        }

        if (Req.IndexDocument !== undefined && typeof payload.WebsiteConfiguration.IndexDocument === 'undefined') {
            payload.WebsiteConfiguration.IndexDocument = Req.IndexDocument;
        }

        if (Req.RedirectAllRequestsTo !== undefined && typeof payload.WebsiteConfiguration.RedirectAllRequestsTo === 'undefined') {
            payload.WebsiteConfiguration.RedirectAllRequestsTo = Req.RedirectAllRequestsTo;
        }

        if (Req.RoutingRules !== undefined && typeof payload.WebsiteConfiguration.RoutingRules === 'undefined') {
            payload.WebsiteConfiguration.RoutingRules = {
                RoutingRule: []
            }
            for (const key of Req.RoutingRules) {
                payload.WebsiteConfiguration.RoutingRules.RoutingRule.push(key)
            }
        }

        const headers = {
            'content-type': 'application/xml',
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        }

        return this.awssignaturev4.call('PUT', uri, headers, payload)
    }

    async putObject(Req: Models.Request.putObject) {
        const uri = new URL(this.endpoint);
        uri.pathname = Req.Bucket + '/' + Req.Key;
        const payload: Record<string, string | Buffer | Uint8Array | Blob> = {}

        if (typeof Req.Body !== 'undefined') {
            payload['file'] = InputFile.fromBuffer(Req.Body, Req.Key);
        }

        const headers: Record<string, string> = {
            'content-type': 'multipart/form-data',
        }

        return this.awssignaturev4.chunkedUpload('PUT', uri, headers, payload, Req.OnProgress);
    }

    async putObjectAcl(Req: Models.Request.PutObjectAcl) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key + '?acl');

        if (Req.VersionId !== undefined) {
            uri.searchParams.append('versionId', Req.VersionId)
        }

        let headers: Record<string, any> = {
            'content-type': 'application/xml',
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        }

        if (Req.ACL !== undefined) {
            headers['x-amz-acl'] = Req.ACL;
        }

        let payload: Record<'AccessControlPolicy', {
            AccessControlList: {
                Grant: Array<any>
            };
            Owner?: {
                ID?: string;
                DisplayName?: string;
            }
        }> = {
            AccessControlPolicy: {
                AccessControlList: {
                    Grant: []
                }
            }
        }

        if (Req.AccessControlPolicy.Owner !== undefined) {
            payload.AccessControlPolicy.Owner = Req.AccessControlPolicy.Owner;
        }

        if (Req.AccessControlPolicy.Grant !== undefined) {
            for (const [_, value] of Object.entries(Req.AccessControlPolicy.Grant)) {
                let pull: {
                    Permission?: string;
                    Grantee: {
                        [key: string]: any;
                    }
                } = {
                    Grantee: {}
                }

                for (const key of Object.keys(value)) {
                    const k = key as 'Permission' | 'Type' | 'DisplayName' | 'EmailAddress' | 'ID' | 'URI';
                    if (key === 'Permission') {
                        pull.Permission = value[k]
                    } else {
                        if (pull.Grantee[key] === undefined) {
                            pull.Grantee[key] = value[k]
                        }
                    }
                }
                payload.AccessControlPolicy.AccessControlList.Grant.push(pull)
            }
        }

        return this.awssignaturev4.call('PUT', uri, headers, payload)
    }

    async putObjectLegalHold(Req: Models.Request.PutObjectLegalHold) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key + '?legal-hold');

        if (Req.VersionId !== undefined) {
            uri.searchParams.append('versionId', Req.VersionId);
        }

        const payload: Record<'LegalHold', {
            Status?: 'ON' | 'OFF'; 
        }> = {
            LegalHold: {
                Status: Req.LegalHold.Status
            }
        }

        const headers = {
            'content-type': 'application/xml',
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        }

        return this.awssignaturev4.call('PUT', uri, headers, payload)
    }

    async putObjectLockConfiguration(Req: Models.Request.PutObjectLockConfiguration) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?object-lock');
        const headers = {
            'content-type': 'application/xml',
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        }
        const payload: Record<'ObjectLockConfiguration', {
            ObjectLockEnabled: "Enabled";
                Rule?: {
                    DefaultRetention?: {
                        Mode: "GOVERNANCE" | "COMPLIANCE";
                        Days?: number;
                        Years?: number;
                    };
                };
        }> = {
            ObjectLockConfiguration: Req.ObjectLockConfiguration
        }

        return this.awssignaturev4.call('PUT', uri, headers, payload);
    }

    async putObjectRetention(Req: Models.Request.PutObjectRetention) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key + '?retention');
        
        if (Req.VersionId !== undefined) {
            uri.searchParams.append('versionId', Req.VersionId);
        }

        const headers: Record<string, any> = {
            'content-type': 'application/xml',
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        }

        const payload: Record<'Retention', {
            Mode?: "GOVERNANCE" | "COMPLIANCE";
            RetainUntilDate?: string;
        }> = {
            Retention: Req.Retention
        }

        return this.awssignaturev4.call('PUT', uri, headers, payload)

    }

    async putObjectTagging(Req: Models.Request.PutObjectTagging) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key + '?tagging');
        
        if (Req.VersionId !== undefined) {
            uri.searchParams.append('versionId', Req.VersionId);
        }

        const headers: Record<string, any> = {
            'content-type': 'application/xml',
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        }

        const payload: Record<'Tagging', {
            TagSet: {
                Tag: Array<{
                  Key: string;
                  Value: string;  
                }>
            }
        }> = {
            Tagging: {
                TagSet: {
                    Tag: Req.Tagging
                }
            }
        }

        return this.awssignaturev4.call('PUT', uri, headers, payload)

    }

    async putPublicAccessBlock(Req: Models.Request.PutPublicAccessBlock) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/?publicAccessBlock');

        const payload: Record<'PublicAccessBlockConfiguration', {
            BlockPublicAcls?: boolean;
            IgnorePublicAcls?: boolean;
            BlockPublicPolicy?: boolean;
            RestrictPublicBuckets?: boolean;
        }> = {
            PublicAccessBlockConfiguration: Req.PublicAccessBlockConfiguration
        };

        const headers = {
            'content-type': 'application/xml',
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        }

        return this.awssignaturev4.call('PUT', uri, headers, payload)
    }

    async restoreObject(Req: Models.Request.RestoreObject) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key + '?restore');

        if (Req.VersionId !== undefined) {
            uri.searchParams.append('versionId', Req.VersionId);
        }

        const headers: Record<string, any> = {
            'content-type': 'application/xml',
            ...AWSSignatureV4.replaceNegatif(Req.Headers),
        }

        const payload: Record<'RestoreRequest', {
            Days?: number;
            GlacierJobParameters?: { Tier: 'Standard' | 'Bulk' | 'Expedited' }
            Type?: 'SELECT'
            Tier?: 'Standard' | 'Bulk' | 'Expedited'
            Description?: string;
            SelectParameters?: {
                Expression: string;
                ExpressionType: 'SQL';
                InputSerialization?: {
                    CompressionType?: 'NONE' | 'GZIP' | 'BZIP2'
                    CSV?: {
                        AllowQuotedRecordDelimiter?: boolean;
                        Comments?: string;
                        FieldDelimiter?: string;
                        FileHeaderInfo?: 'USE' | 'IGNORE' | 'NONE';
                        QuoteCharacter?: string;
                        QuoteEscapeCharacter?: string;
                        RecordDelimiter?: string;
                    };
                    JSON?: {
                        Type?: 'DOCUMENT' | 'LINES'
                    }
                    Parquet: {}
                };
                OutputSerialization?: {
                    CSV?: {
                        FieldDelimiter?: string;
                        QuoteCharacter?: string;
                        QuoteEscapeCharacter?: string;
                        QuoteFields?: 'ALWAYS' | 'ASNEEDED';
                        RecordDelimiter?: string;
                    };
                    JSON?: {
                        RecordDelimiter?: string;
                    }
                }
            }
            OutputLocation?: {
                S3?: {
                    BucketName: string;
                    Prefix: string;
                    AccessControlList: {
                        Grant?: Array<{
                            Grantee?: {
                                Type: 'CanonicalUser' | 'AmazonCustomerByEmail' | 'Group';
                                DisplayName?: string;
                                EmailAddress?: string;
                                ID?: string;
                                URI?: string;
                            };
                            Permission?: 'FULL_CONTROL' | 'WRITE' | 'WRITE_ACP' | 'READ' | 'READ_ACP'
                        }>
                    }
                    CannedACL?: 'private' | 'public-read'| 'public-read-write' | 'authenticated-read' | 'aws-exec-read' | 'bucket-owner-read' | 'bucket-owner-full-control';
                    Encryption?: {
                        EncryptionType: 'AES256' | 'aws:kms' | 'aws:kms:dsse';
                        KMSContext?: string;
                        KMSKeyId?: string;
                    }
                    StorageClass?: 'STANDARD' | 'REDUCED_REDUNDANCY' | 'STANDARD_IA' | 'ONEZONE_IA' | 'INTELLIGENT_TIERING' | 'GLACIER' | 'DEEP_ARCHIVE' | 'OUTPOSTS' | 'GLACIER_IR' | 'SNOW' | 'EXPRESS_ONEZONE';
                    Tagging?: {
                        TagSet: {
                            Tag: Array<{
                                Key: string;
                                Value: string;
                            }>
                        }
                    }
                    UserMetadata?: {
                        Name?: string;
                        Value?: string;
                    }
                }
            }
        }> = {
            RestoreRequest: Req.RestoreRequest
        }

        return this.awssignaturev4.call('POST', uri, headers, payload)

    }    

    async selectObjectContent(Req: Models.Request.selectObjectContent) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key + '?select&select-type=2');
        let payload: Record<'SelectObjectContentRequest', {
            Expression?: string;
            ExpressionType?: string;
            RequestProgress?: {
                Enabled: boolean
            },
            InputSerialization: {
                CSV?: {
                    FileHeaderInfo?: "USE" | "IGNORE" | "NONE";
                    RecordDelimiter?: string;
                    FieldDelimiter?: string;
                    QuoteCharacter?: string;
                    QuoteEscapeCharacter?: string;
                    AllowQuotedRecordDelimiter?: boolean;
                };
                JSON?: {
                    Type: "DOCUMENT" | "LINES";
                };
                Parquet?: {};
                CompressionType?: "NONE" | "GZIP" | "BZIP2";
            };
            OutputSerialization: {
                CSV?: {
                    QuoteFields?: "ALWAYS" | "ASNEEDED";
                    QuoteCharacter?: string;
                    RecordDelimiter?: string;
                    FieldDelimiter?: string;
                };
                JSON?: {
                    RecordDelimiter?: string;
                };
            };
            ScanRange?: {
                End?: number;
                Start?: number;
            }
        }> = {
            SelectObjectContentRequest: {
                Expression: Req.Expression,
                ExpressionType: Req.ExpressionType,
                InputSerialization: Req.InputSerialization,
                OutputSerialization: Req.OutputSerialization,
            }
        };

        if (Req.RequestProgress !== undefined && typeof payload.SelectObjectContentRequest.RequestProgress  === 'undefined') {
            payload.SelectObjectContentRequest.RequestProgress = Req.RequestProgress;
        }

        if (Req.ScanRange !== undefined && typeof payload.SelectObjectContentRequest.ScanRange === 'undefined') {
            if (Req.ScanRange.End !== undefined) {
                payload.SelectObjectContentRequest.ScanRange = {
                    End: Req.ScanRange.End
                }
            }

            if (Req.ScanRange.Start !== undefined) {
                payload.SelectObjectContentRequest.ScanRange = {
                    Start: Req.ScanRange.Start,
                }
            }

            if (Req.ScanRange.End !== undefined && Req.ScanRange.Start !== undefined) {
                payload.SelectObjectContentRequest.ScanRange = Req.ScanRange;
            }
        } 

        const headers = {
            'content-type': 'application/xml',
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        };

        return this.awssignaturev4.call('POST', uri, headers, payload)
        
    }

    async uploadPart(Req: Models.Request.uploadPart) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key);

        if (Req.PartNumber !== undefined) {
            uri.searchParams.append('partNumber', Req.PartNumber);
        }

        if (Req.UploadId !== undefined) {
            uri.searchParams.append('uploadId', Req.UploadId);
        }

        const payload: Record<string, string | Buffer | Uint8Array | Blob> = {}

        if (Req.Body !== undefined) {
            payload['file'] = InputFile.fromBuffer(Req.Body, Req.Key)
        }

        const headers = {
            'content-type': 'multipart/form-data',
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        };
        
        return this.awssignaturev4.chunkedUpload('PUT', uri, headers, payload);
    }

    async uploadPartCopy(Req: Models.Request.uploadPartCopy) {
        const uri = new URL(this.endpoint + '/' + Req.Bucket + '/' + Req.Key);
        
        if (Req.PartNumber !== undefined) {
            uri.searchParams.append('partNumber', Req.PartNumber)
        }

        if (Req.UploadId !== undefined) {
            uri.searchParams.append('uploadId', Req.UploadId);
        }

        if (Req.CopySource === undefined) {
            throw new Error('Copy Source not undefined');
        }

        const headers = {
            'x-amz-copy-source': Req.CopySource,
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        }

        return this.awssignaturev4.call('PUT', uri, headers, {});
        
    }

    async writeGetObjectResponse(Req: Models.Request.writeGetObjectResponse) {
        const uri = new URL(this.endpoint + '/WriteGetObjectResponse');

        const headers: Record<string, any> = {
            'content-type': 'multipart/form-data',
            ...AWSSignatureV4.replaceNegatif(Req.Headers)
        };

        if (Req.RequestRoute !== undefined) {
            headers['x-amz-request-route'] = Req.RequestRoute;
        }

        if (Req.RequestToken !== undefined) {
            headers['x-amz-request-token'] = Req.RequestToken;
        }

        const payload: Record<string, Blob | Uint8Array | string | Buffer> = {}

        if (Req.Body !== undefined && Req.KeyBody !== undefined) {
            payload['file'] = InputFile.fromBuffer(Req.Body, Req.KeyBody);
        }

        return this.awssignaturev4.chunkedUpload('POST', uri, headers, payload);

    }

    async presign(Req: Models.Request.presign) {
        const uri = new URL(this.endpoint);
        uri.pathname = Req.Bucket + '/' + Req.Key;;
        return this.awssignaturev4.getPresignedUrl('GET', uri, 900)
    }
}
