import type { AxiosProgressEvent } from "axios";

export namespace Models {

    export namespace Request {

        /**
         * Interface for creating a bucket in Amazon S3.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html
        */
        export interface abortMultipartUpload {
            Bucket: string;
            Key: string;
            /**
            * The upload ID identifying the multipart upload to be aborted.
            */
            UploadId: string;
            /**
             * Additional headers that can be sent in the abort request.
             *
             * Example usage:
             * ```typescript
             * Headers: {
             *   "x-amz-request-payer": "requester"
             * }
             * ```
            */
            Headers?: Record<string, any>;
        }

        /**
         * Interface for copying an object using Amazon S3 CopyObject API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html
         */
        export interface copyObject {
            /**
             * The name of the source bucket containing the object to copy.
             */
            Bucket: string;

            /**
             * The key of the source object to copy.
             */
            Key: string;

            /**
             * The name of the target bucket where the object will be copied.
             */
            TargetBucket: string;

            /**
             * The key of the copied object in the target bucket.
             */
            TargetKey: string;

            /**
             * Additional headers that can be sent in the copy request.
             */
            Headers?: Record<string, any>;
        }

        /**
         * Interface for creating a bucket in Amazon S3.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html
         */
        export interface createBucket {
            /**
             * The name of the bucket to be created.
             *
             * - Must be unique across all Amazon S3.
             * - Cannot contain special characters except for hyphens (-).
             * - Must follow AWS bucket naming rules.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the bucket creation request.
             *
             * Example usage:
             * ```typescript
             * Headers: {
             *   "x-amz-acl": "public-read",
             *   "x-amz-storage-class": "STANDARD"
             * }
             * ```
             */
            Headers?: Record<string, any>;
        }

        /**
         * Interface for listing all buckets in Amazon S3.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html
         */
        export interface listBuckets {
            /**
             * Additional headers that can be sent in the list request.
             *
             * Example usage:
             * ```typescript
             * Headers: {
             *   "x-amz-request-payer": "requester"
             * }
             * ```
             */
            Headers?: Record<string, any>;
        }

        /**
         * Interface for listing objects in a bucket using Amazon S3 ListObjectsV2 API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html
         */
        export interface listObjectsV2 {
            /**
             * The name of the bucket containing the objects.
             */
            Bucket: string;

            /**
             * Type of list operation.
             */
            ListType?: number;

            /**
             * A continuation token for paginated results.
             */
            ContinuationToken?: string;

            /**
             * Delimiter for grouping keys.
             */
            Delimiter?: string;

            /**
             * The encoding type used to encode object keys in the response.
             */
            EncodingType?: string;

            /**
             * Flag indicating whether to include metadata about object versions.
             */
            FetchOwner?: string;

            /**
             * The maximum number of keys to return.
             */
            MaxKeys?: string;

            /**
             * The key prefix for filtering objects.
             */
            Prefix?: string;

            /**
             * Specifies the key to start after when listing objects in a bucket.
             */
            StartAfter?: string;

            /**
             * Additional headers that can be sent in the list request.
             */
            Headers?: Record<string, any>;
        }

        /**
         * Interface for listing object versions in a bucket using Amazon S3 ListObjectVersions API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html
         */
        export interface listObjectVersions {
            /**
             * The name of the bucket containing the object versions.
             */
            Bucket: string;

            /**
             * The key prefix for filtering object versions.
             */
            Prefix?: string;

            /**
             * A delimiter used to group object keys.
             */
            Delimiter?: string;

            /**
             * The key to start after when listing object versions.
             */
            KeyMarker?: string;

            /**
             * The version ID to start after when listing object versions.
             */
            VersionIdMarker?: string;

            /**
             * The maximum number of object versions to return.
             */
            MaxKeys?: number;

            /**
             * The encoding type used to encode object keys in the response.
             */
            EncodingType?: "url";

            /**
             * Additional headers that can be sent in the list request.
             */
            Headers?: Record<string, any>;
        }

        /**
         * Interface for deleting a bucket using Amazon S3 DeleteBucket API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html
         */
        export interface deleteBucket {
            /**
             * The name of the bucket to be deleted.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the delete request.
             */
            Headers?: Record<string, any>;
        }

        /**
         * Interface for uploading an object using Amazon S3 PutObject API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html
         */
        export interface putObject {
            /**
             * The name of the bucket where the object will be stored.
             */
            Bucket: string;

            /**
             * The key of the object to be stored.
             */
            Key: string;

            /**
             * The content of the object to be uploaded.
             */
            Body: string | Buffer | Uint8Array | Blob;

            /**
             * Additional headers that can be sent in the put request.
             */
            Headers?: Record<string, string>;
            OnProgress?: (uploadProgress: AxiosProgressEvent) => void
        }

        /**
         * Interface for creating a session using Amazon S3 CreateSession API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html
         */
        export interface createSession {
            /**
             * The name of the bucket associated with the session.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving an object using Amazon S3 GetObject API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
         */
        export interface getObject {
            /**
             * The name of the bucket containing the object.
             */
            Bucket: string;

            /**
             * The key of the object to retrieve.
             */
            Key: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for deleting an object using Amazon S3 DeleteObject API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
         */
        export interface deleteObject {
            /**
             * The name of the bucket containing the object to delete.
             */
            Bucket: string;

            /**
             * The key of the object to delete.
             */
            Key: string;


            /**
             * The VersionId of the object to delete.
             */
            VersionId?: any;

            /**
             * Additional headers that can be sent in the delete request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving a bucket policy using Amazon S3 GetBucketPolicy API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html
         */
        export interface getBucketPolicy {
            /**
             * The name of the bucket whose policy is being retrieved.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for creating a bucket metadata table configuration using Amazon S3 API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/
         */
        export interface createBucketMetadataTableConfiguration {
            /**
             * The name of the bucket for which the metadata table configuration is being created.
             */
            Bucket: string;

            /**
             * The configuration details for the metadata table.
             */
            Configuration: Record<'MetadataTableConfiguration' | 'S3TablesDestination', string>;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for deleting bucket tagging using Amazon S3 DeleteBucketTagging API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html
         */
        export interface deleteBucketTagging {
            /**
             * The name of the bucket from which the tagging configuration will be deleted.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the delete request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving object tagging using Amazon S3 GetObjectTagging API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html
         */
        export interface getObjectTagging {
            /**
             * The name of the bucket containing the object.
             */
            Bucket: string;

            /**
             * The key of the object whose tags are being retrieved.
             */
            Key: string;

            VersionId?: any;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for checking the existence and metadata of a bucket using Amazon S3 HeadBucket API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadBucket.html
         */
        export interface headBucket {
            /**
             * The name of the bucket to check.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving metadata of an object using Amazon S3 HeadObject API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html
         */
        export interface headObject {
            /**
             * The name of the bucket containing the object.
             */
            Bucket: string;

            /**
             * The key of the object whose metadata is being retrieved.
             */
            Key: string;

            MetaObject?: Record<'partNumber' |
                'ResponseCacheControl' | 'ResponseContentDisposition' |
                'ResponseContentEncoding' | 'ResponseContentLanguage' |
                'ResponseContentType' | 'ResponseExpires' |
                'VersionId', any>;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }


        /**
         * Interface for initiating a multipart upload using Amazon S3 CreateMultipartUpload API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html
         */
        export interface createMultipartUpload {
            /**
             * The name of the bucket where the multipart upload is initiated.
             */
            Bucket: string;

            /**
             * The key of the object being uploaded.
             */
            Key: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for listing parts of a multipart upload using Amazon S3 ListParts API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html
         */
        export interface listParts {
            /**
             * The name of the bucket containing the multipart upload.
             */
            Bucket: string;

            /**
             * The key of the object being uploaded.
             */
            Key: string;

            /**
             * The upload ID identifying the multipart upload.
             */
            UploadId: string;

            /**
             * The maximum number of parts to return in the response.
             */
            MaxParts?: number;

            /**
             * The part number after which listing should begin.
             */
            PartNumberMarker?: number;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }


        /**
         * Interface for configuring bucket versioning using Amazon S3 PutBucketVersioning API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html
         */
        export interface putBucketVersioning {
            /**
             * The name of the bucket for which versioning is being configured.
             */
            Bucket: string;

            /**
             * The versioning configuration status (Enabled or Suspended).
             */
            Status: "Enabled" | "Suspended";

            /**
             * Optional: Specifies whether MFA delete is enabled or disabled.
             */
            MFADelete?: "Enabled" | "Disabled";

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for uploading a part in a multipart upload using Amazon S3 UploadPart API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html
         */
        export interface uploadPart {
            /**
             * The name of the bucket containing the multipart upload.
             */
            Bucket: string;

            /**
             * The key of the object being uploaded.
             */
            Key: string;

            /**
             * The upload ID identifying the multipart upload.
             */
            UploadId: string;

            /**
             * The part number of the part being uploaded.
             */
            PartNumber: any;

            /**
             * The data of the part being uploaded.
             */
            Body: Buffer | Uint8Array | Blob | string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for copying a part in a multipart upload using Amazon S3 UploadPartCopy API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html
         */
        export interface uploadPartCopy {
            /**
             * The name of the destination bucket.
             */
            Bucket: string;

            /**
             * The key of the destination object.
             */
            Key: string;

            /**
             * The upload ID identifying the multipart upload.
             */
            UploadId: string;

            /**
             * The part number of the part being copied.
             */
            PartNumber: any;

            /**
             * The source bucket and key of the part to be copied.
             */
            CopySource: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for writing a GetObject response using Amazon S3 WriteGetObjectResponse API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_WriteGetObjectResponse.html
         */
        export interface writeGetObjectResponse {
            /**
             * The request token associated with the GetObject request.
             */
            RequestToken: string;

           /**
             * The request route associated with the Route prefix to the HTTP URL generated..
             */
            RequestRoute: number;

            /**
             * The object data to be written in the response.
             */
            Body: Buffer | Uint8Array | Blob | string;

            /**
             * The KeyBody of the object being uploaded.
             */
            KeyBody: string;

            /**
             * Additional headers that can be sent in the response.
             */
            Headers?: Record<string, string>;
        }


        /**
         * Interface for completing a multipart upload using Amazon S3 CompleteMultipartUpload API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html
         */
        export interface completeMultipartUpload {
            /**
             * The name of the bucket containing the multipart upload.
             */
            Bucket: string;

            /**
             * The key of the object being uploaded.
             */
            Key: string;

            /**
             * The upload ID identifying the multipart upload.
             */
            UploadId: string;

            /**
             * The list of parts and their corresponding ETags.
             */
            Parts?: Array<{ 
                PartNumber?: any; 
                ETag?: string
                ChecksumSHA256?: string;
                ChecksumSHA1?: string;
                ChecksumCRC64NVME?: string;
                ChecksumCRC32C?: string;
                ChecksumCRC32?: string;
            }>;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for deleting multiple objects using Amazon S3 DeleteObjects API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjects.html
         */
        export interface deleteObjects {
            /**
             * The name of the bucket containing the objects to delete.
             */
            Bucket: string;

            /**
             * A list of objects to delete, including their keys and optional version IDs.
             */
            Objects: Array<{ 
                Key: string; 
                ETag?: string;
                LastModifiedTime?: string;
                Size?: number;
                VersionId?: string;
            }>;

            Quiet?: boolean;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for deleting an analytics configuration using Amazon S3 DeleteBucketAnalyticsConfiguration API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketAnalyticsConfiguration.html
         */
        export interface deleteBucketAnalyticsConfiguration {
            /**
             * The name of the bucket containing the analytics configuration to delete.
             */
            Bucket: string;

            /**
             * The ID of the analytics configuration to delete.
             */
            Id: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for configuring bucket website settings using Amazon S3 PutBucketWebsite API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html
         */
        export interface putBucketWebsite {
            /**
             * The name of the bucket for which to set the website configuration.
             */
            Bucket: string;

            /**
             * The index document for the website configuration.
             */
            IndexDocument?: { Suffix: string };

            /**
             * The error document for the website configuration.
             */
            ErrorDocument?: { Key: string };

            /**
             * The redict document for the website configuration.
             */
            RedirectAllRequestsTo?: {
                HostName: string;
                Protocol: string;
            }

            /**
             * Routing rules for advanced website redirection.
             */
            RoutingRules?: Array<{ 
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
                },
             }>;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for deleting the CORS configuration of a bucket using Amazon S3 DeleteBucketCors API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketCors.html
         */
        export interface deleteBucketCors {
            /**
             * The name of the bucket for which to delete the CORS configuration.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for deleting the encryption configuration of a bucket using Amazon S3 DeleteBucketEncryption API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketEncryption.html
         */
        export interface deleteBucketEncryption {
            /**
             * The name of the bucket for which to delete the encryption configuration.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for deleting an intelligent-tiering configuration using Amazon S3 DeleteBucketIntelligentTieringConfiguration API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketIntelligentTieringConfiguration.html
         */
        export interface deleteBucketIntelligentTieringConfiguration {
            /**
             * The name of the bucket for which to delete the intelligent-tiering configuration.
             */
            Bucket: string;

            /**
             * The ID of the intelligent-tiering configuration to delete.
             */
            Id: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
        * Interface for deleting an inventory configuration using Amazon S3 DeleteBucketInventoryConfiguration API.
        *
        * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketInventoryConfiguration.html
        */
        export interface deleteBucketInventoryConfiguration {
            /**
             * The name of the bucket for which to delete the inventory configuration.
             */
            Bucket: string;

            /**
             * The ID of the inventory configuration to delete.
             */
            Id: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for deleting the lifecycle configuration of a bucket using Amazon S3 DeleteBucketLifecycle API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html
         */
        export interface deleteBucketLifecycle {
            /**
             * The name of the bucket for which to delete the lifecycle configuration.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for deleting the metadata table configuration of a bucket using Amazon S3 DeleteBucketMetadataTableConfiguration API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetadataTableConfiguration.html
         */
        export interface deleteBucketMetadataTableConfiguration {
            /**
             * The name of the bucket for which to delete the metadata table configuration.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
        * Interface for deleting a metrics configuration from a bucket using Amazon S3 DeleteBucketMetricsConfiguration API.
        *
        * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetricsConfiguration.html
        */
        export interface deleteBucketMetricsConfiguration {
            /**
             * The name of the bucket for which to delete the metrics configuration.
             */
            Bucket: string;

            /**
             * The ID of the metrics configuration to delete.
             */
            Id: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for deleting the ownership controls of a bucket using Amazon S3 DeleteBucketOwnershipControls API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketOwnershipControls.html
         */
        export interface deleteBucketOwnershipControls {
            /**
             * The name of the bucket for which to delete the ownership controls.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for deleting the bucket policy using Amazon S3 DeleteBucketPolicy API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html
         */
        export interface deleteBucketPolicy {
            /**
             * The name of the bucket for which to delete the policy.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }


        /**
         * Interface for deleting the replication configuration of a bucket using Amazon S3 DeleteBucketReplication API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html
         */
        export interface deleteBucketReplication {
            /**
             * The name of the bucket for which to delete the replication configuration.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for deleting the website configuration of a bucket using Amazon S3 DeleteBucketWebsite API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html
         */
        export interface deleteBucketWebsite {
            /**
             * The name of the bucket for which to delete the website configuration.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for deleting the tagging configuration of an object using Amazon S3 DeleteObjectTagging API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
         */
        export interface deleteObjectTagging {
            /**
             * The name of the bucket containing the object.
             */
            Bucket: string;

            /**
             * The key of the object for which to delete the tagging configuration.
             */
            Key: string;

            /**
             * The version ID of the object (if versioning is enabled).
             */
            VersionId?: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for deleting the public access block configuration of a bucket using Amazon S3 DeletePublicAccessBlock API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeletePublicAccessBlock.html
         */
        export interface deletePublicAccessBlock {
            /**
             * The name of the bucket for which to delete the public access block configuration.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }


        /**
         * Interface for retrieving the accelerate configuration of a bucket using Amazon S3 GetBucketAccelerateConfiguration API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html
         */
        export interface getBucketAccelerateConfiguration {
            /**
             * The name of the bucket for which to retrieve the accelerate configuration.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the access control list (ACL) of a bucket using Amazon S3 GetBucketAcl API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAcl.html
         */
        export interface getBucketAcl {
            /**
             * The name of the bucket for which to retrieve the ACL configuration.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the Cross-Origin Resource Sharing (CORS) configuration of a bucket using Amazon S3 GetBucketCors API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html
         */
        export interface getBucketCors {
            /**
             * The name of the bucket for which to retrieve the CORS configuration.
             */
            Bucket: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the encryption configuration of a bucket using Amazon S3 GetBucketEncryption API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html
         */
        export interface getBucketEncryption {
            Bucket: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the intelligent-tiering configuration of a bucket using Amazon S3 GetBucketIntelligentTieringConfiguration API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketIntelligentTieringConfiguration.html
         */
        export interface getBucketIntelligentTieringConfiguration {
            Bucket: string;
            Id: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the inventory configuration of a bucket using Amazon S3 GetBucketInventoryConfiguration API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html
         */
        export interface getBucketInventoryConfiguration {
            Bucket: string;
            Id: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the lifecycle configuration of a bucket using Amazon S3 GetBucketLifecycle API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycle.html
         */
        export interface getBucketLifecycle {
            Bucket: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the lifecycle configuration of a bucket using Amazon S3 GetBucketLifecycleConfiguration API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html
         */
        export interface getBucketLifecycleConfiguration {
            Bucket: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the location of a bucket using Amazon S3 GetBucketLocation API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html
         */
        export interface getBucketLocation {
            Bucket: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the logging configuration of a bucket using Amazon S3 GetBucketLogging API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html
         */
        export interface getBucketLogging {
            Bucket: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the metadata table configuration of a bucket using Amazon S3 GetBucketMetadataTableConfiguration API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetadataTableConfiguration.html
         */
        export interface getBucketMetadataTableConfiguration {
            Bucket: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the metrics configuration of a bucket using Amazon S3 GetBucketMetricsConfiguration API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html
         */
        export interface getBucketMetricsConfiguration {
            Bucket: string;
            Id: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the notification configuration of a bucket using Amazon S3 GetBucketNotification API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotification.html
         */
        export interface getBucketNotification {
            Bucket: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the notification configuration of a bucket using Amazon S3 GetBucketNotificationConfiguration API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotificationConfiguration.html
         */
        export interface getBucketNotificationConfiguration {
            Bucket: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the ownership controls of a bucket using Amazon S3 GetBucketOwnershipControls API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketOwnershipControls.html
         */
        export interface getBucketOwnershipControls {
            Bucket: string;
            Headers?: Record<string, string>;
        }


        /**
         * Interface for retrieving the analytics configuration of a bucket using Amazon S3 GetBucketAnalyticsConfiguration API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html
         */
        export interface getBucketAnalyticsConfiguration {
            /**
             * The name of the bucket for which to retrieve the analytics configuration.
             */
            Bucket: string;

            /**
             * The ID that identifies the analytics configuration.
             */
            Id: string;

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the policy status of a bucket using Amazon S3 GetBucketPolicyStatus API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html
         */
        export interface getBucketPolicyStatus {
            /**
             * The name of the bucket for which to retrieve the policy status.
             */
            Bucket: string;
            
            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the replication configuration of a bucket using Amazon S3 GetBucketReplication API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html
         */
        export interface getBucketReplication {
            Bucket: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the request payment configuration of a bucket using Amazon S3 GetBucketRequestPayment API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketRequestPayment.html
         */
        export interface getBucketRequestPayment {
            Bucket: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the tagging configuration of a bucket using Amazon S3 GetBucketTagging API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html
         */
        export interface getBucketTagging {
            Bucket: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the versioning configuration of a bucket using Amazon S3 GetBucketVersioning API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html
         */
        export interface getBucketVersioning {
            Bucket: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the website configuration of a bucket using Amazon S3 GetBucketWebsite API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html
         */
        export interface getBucketWebsite {
            Bucket: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the access control list (ACL) of an object using Amazon S3 GetObjectAcl API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html
         */
        export interface getObjectAcl {
            /**
             * The name of the bucket containing the object.
             */
            Bucket: string;
            
            /**
             * The key of the object for which to retrieve the ACL.
             */
            Key: string;

            /**
             * The versionId of the object for which to retrieve the ACL.
             */
            VersionId?: string;
            
            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving attributes of an object using Amazon S3 GetObjectAttributes API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html
         */
        export interface getObjectAttributes {
            Bucket: string;
            Key: string;
            VersionId?: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the legal hold status of an object using Amazon S3 GetObjectLegalHold API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html
         */
        export interface getObjectLegalHold {
            Bucket: string;
            Key: string;
            VersionId?: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the lock configuration of an object using Amazon S3 GetObjectLockConfiguration API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLockConfiguration.html
         */
        export interface getObjectLockConfiguration {
            Bucket: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the retention configuration of an object using Amazon S3 GetObjectRetention API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html
         */
        export interface getObjectRetention {
            Bucket: string;
            Key: string;
            VersionId?: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the torrent file of an object using Amazon S3 GetObjectTorrent API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html
         */
        export interface getObjectTorrent {
            /**
             * The name of the bucket containing the object.
             */
            Bucket: string;
            
            /**
             * The key of the object for which to retrieve the torrent file.
             */
            Key: string;
            
            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for retrieving the public access block configuration of a bucket using Amazon S3 GetPublicAccessBlock API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html
         */
        export interface getPublicAccessBlock {
            /**
             * The name of the bucket for which to retrieve the public access block configuration.
             */
            Bucket: string;
            
            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for listing the analytics configurations of a bucket using Amazon S3 ListBucketAnalyticsConfigurations API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketAnalyticsConfigurations.html
         */
        export interface listBucketAnalyticsConfigurations {
            /**
             * The name of the bucket for which to list analytics configurations.
             */
            Bucket: string;
            
            /**
             * A continuation token if the response is truncated.
             */
            ContinuationToken?: string;
            
            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for listing the intelligent-tiering configurations of a bucket using Amazon S3 ListBucketIntelligentTieringConfigurations API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketIntelligentTieringConfigurations.html
         */
        export interface listBucketIntelligentTieringConfigurations {
            Bucket: string;
            ContinuationToken?: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for listing the inventory configurations of a bucket using Amazon S3 ListBucketInventoryConfigurations API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketInventoryConfigurations.html
         */
        export interface listBucketInventoryConfigurations {
            Bucket: string;
            ContinuationToken?: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for listing the metrics configurations of a bucket using Amazon S3 ListBucketMetricsConfigurations API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketMetricsConfigurations.html
         */
        export interface listBucketMetricsConfigurations {
            Bucket: string;
            ContinuationToken?: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for listing directory buckets using a custom API.
         *
         * Note: Amazon S3 does not have a direct API named ListDirectoryBuckets.
         * This might be a custom implementation depending on the storage structure.
         */
        export interface listDirectoryBuckets {
            /**
             * A continuation token if the response is truncated.
             */
            ContinuationToken?: string;
            
            /**
             * Maximum number of directory buckets to return in response.
             */
            MaxDirectoryBuckets?: any;
            
            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for listing the ongoing multipart uploads in a bucket using Amazon S3 ListMultipartUploads API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html
         */
        export interface listMultipartUploads {
            /**
             * The name of the bucket containing the multipart uploads.
             */
            Bucket: string;
            
            /**
             * A prefix for filtering uploads.
             */
            Prefix?: string;

            /**
             * A delimeter for Character you use to group keys.
             */
            Delimiter?: string;

            /**
             * A EcodingType for using string url
             */
            EncodingType?: string
            
            /**
             * A key marker indicating where to continue pagination.
             */
            KeyMarker?: string;
            
            /**
             * An upload ID marker indicating where to continue pagination.
             */
            UploadIdMarker?: string;
            
            /**
             * Maximum number of uploads to return in response.
             */
            MaxUploads?: number;
            
            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for performing SQL-like queries on an object in Amazon S3 using the SelectObjectContent API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_SelectObjectContent.html
         */
        export interface selectObjectContent {
            /**
             * The name of the bucket containing the object.
             */
            Bucket: string;

            /**
             * The key of the object to query.
             */
            Key: string;

            /**
             * The expression used to query the object content.
             */
            Expression: string;

            /**
             * The type of expression language used (only "SQL" is supported).
             */
            ExpressionType: "SQL";

            RequestProgress?: {
                Enabled: boolean
            }

            /**
             * The input serialization format of the object.
             */
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

            /**
             * The output serialization format of the query result.
             */
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

            /**
             * the scanrange when its first byte is contained by the range
             */
            ScanRange?: {
                End?: number;
                Start?: number;
            }

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for adding or replacing the tagging configuration of a bucket using Amazon S3 PutBucketTagging API.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html
         */
        export interface putBucketTagging {
            /**
             * The name of the bucket for which to set the tagging configuration.
             */
            Bucket: string;

            /**
             * The list of tags to be applied to the bucket.
             */
            Tagging: {
                TagSet: Array<{
                    Key: string;
                    Value: string;
                }>;
            };

            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for setting the ACL (Access Control List) of an object using Amazon S3 PutObjectAcl API.
         * 
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html
         */
        export interface PutObjectAcl {
            /**
             * The name of the bucket containing the object.
             */
            Bucket: string;
            
            /**
             * The key of the object for which to set the ACL.
             */
            Key: string;
            
            /**
             * The ACL permissions to apply.
             */
            ACL?: string;

            /**
             * The VersionId to apply
             */
            VersionId?: string;

            AccessControlPolicy: {
                Owner?: {
                    ID?: string;
                    DisplayName?: string;
                },
                Grant?: Array<{
                    Permission?: 'FULL_CONTROL' | 'WRITE' | 'WRITE_ACP' | 'READ' | 'READ_ACP',
                    Type: 'CanonicalUser' | 'AmazonCustomerByEmail' | 'Group',
                    DisplayName?: string;
                    EmailAddress?: string;
                    ID?: string;
                    URI?: string;
                }>
            };
            
            /**
             * Additional headers that can be sent in the request.
             */
            Headers?: Record<string, string>;
        }

        /**
         * Interface for setting the legal hold status of an object using Amazon S3 PutObjectLegalHold API.
         * 
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLegalHold.html
         */
        export interface PutObjectLegalHold {
            Bucket: string;
            Key: string;
            LegalHold: { Status: "ON" | "OFF" };
            VersionId?: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for configuring object lock settings using Amazon S3 PutObjectLockConfiguration API.
         * 
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLockConfiguration.html
         */
        export interface PutObjectLockConfiguration {
            Bucket: string;
            ObjectLockConfiguration: {
                ObjectLockEnabled: "Enabled";
                Rule?: {
                    DefaultRetention?: {
                        Mode: "GOVERNANCE" | "COMPLIANCE";
                        Days?: number;
                        Years?: number;
                    };
                };
            };
            Headers?: Record<string, string>;
        }

        /**
         * Interface for setting object retention using Amazon S3 PutObjectRetention API.
         * 
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectRetention.html
         */
        export interface PutObjectRetention {
            Bucket: string;
            Key: string;
            Retention: {
                Mode: "GOVERNANCE" | "COMPLIANCE";
                RetainUntilDate: string;
            };
            VersionId?: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for setting object tagging using Amazon S3 PutObjectTagging API.
         * 
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
         */
        export interface PutObjectTagging {
            Bucket: string;
            Key: string;
            Tagging:Array<{ Key: string; Value: string; }>;
            VersionId?: string;
            Headers?: Record<string, string>;
        }

        /**
         * Interface for setting public access block configurations using Amazon S3 PutPublicAccessBlock API.
         * 
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html
         */
        export interface PutPublicAccessBlock {
            Bucket: string;
            PublicAccessBlockConfiguration: {
                BlockPublicAcls?: boolean;
                IgnorePublicAcls?: boolean;
                BlockPublicPolicy?: boolean;
                RestrictPublicBuckets?: boolean;
            };
            Headers?: Record<string, string>;
        }

        /**
         * Interface for restoring an archived object using Amazon S3 RestoreObject API.
         * 
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html
         */
        export interface RestoreObject {
            Bucket: string;
            Key: string;
            VersionId?: string;
            RestoreRequest: {
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
            };
            Headers?: Record<string, string>;
        }




        /**
         * Interface for generating a presigned URL using Amazon S3.
         *
         * Reference: https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html
         */
        export interface presign {
            /**
             * The name of the bucket where the object is located.
             */
            Bucket: string;

            /**
             * The key of the object for which the presigned URL is generated.
             */
            Key: string;
        }

    }
}