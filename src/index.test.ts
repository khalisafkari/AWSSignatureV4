// process.env.BUN_CONFIG_VERBOSE_FETCH = "true";

import { expect, test } from 'bun:test'

import client from './client';
import AWSSignatureV4 from './AWSSignatureV4';
import { S3Operations } from './S3Operations';

const signature = new AWSSignatureV4(
    client.accessKeyId!,
    client.secretAccessKey!,
    client.region,
    's3',
)

const s3a = new S3Operations('https://s3.nevaobjects.id', signature);

test('listDirectoryBuckets', async () => {
    const listDirectoryBuckets = await s3a.listDirectoryBuckets({});
    expect(listDirectoryBuckets).toBeObject();
})

test('deleteObjects', async () => {
    await s3a.deleteObjects({
        Bucket: 'khalis',
        Objects: [
            {
                Key: '100',
            },
            {
                Key: '200',
            }
        ],
        Quiet: false
    })
})

test('createMultipartUpload', async () => {
    const createMultipartUpload = await s3a.createMultipartUpload({ Bucket: 'khalis', Key: 'github.mp4' });
    expect(createMultipartUpload).toMatchObject(/InitiateMultipartUploadResult/)
})

test('putBucketVersioning', async () => {
    const putBucketVersioning = await s3a.putBucketVersioning({ Bucket: 'khalis', Status: 'Enabled', MFADelete: 'Enabled' });
    expect(putBucketVersioning).toBeObject()
})

test('putObject', async () => {
    const file = Bun.file('./index.ts');
    const putObject = await s3a.putObject({ Bucket: 'khalis', Key: 'build.ts', Body: file });
    expect(putObject).toBe(0)
});


test('getObject', async () => {
    const getObject = await s3a.getObject({ Bucket: 'khalis', Key: 'build.ts' });
    expect(getObject).toBeString()
})

test('createSession', async () => {
    const createSession = await s3a.createSession({ Bucket: 'khalis' });
    expect(createSession).toBeObject()
})

test('presign', async () => {
    const sign = await s3a.presign({ Bucket: 'khalis', Key: 'file.txt' });
    expect(sign.toString()).toBeString();
})

test('listBucket', async () => {
    const listBucket = await s3a.listBuckets();
    expect(listBucket).toBeObject();
})

test('listObjectVersions', async () => {
    const listObjectVersions = await s3a.listObjectVersions({
        Bucket: 'khalis',
        MaxKeys: 10,
    });
    expect(listObjectVersions).toBeObject()
})

test('listObjects', async () => {
    const listObjects = await s3a.listObjects();
    expect(listObjects).toBeUndefined()
})

test('listObjectsV2', async () => {
    const listObjectsV2 = await s3a.listObjectsV2({
        Bucket: 'khalis',
    });
    expect(listObjectsV2).toBeObject();
})

test('createBucket', async () => {
    const createBucket = await s3a.createBucket({
        Bucket: 'afkari'
    });
    expect(createBucket).toBe('');
})

test('copyObject', async () => {
    const copyObject = await s3a.copyObject({
        Bucket: 'khalis',
        Key: 'build.ts',
        TargetBucket: 'afkari',
        TargetKey: 'build.ts',
        Headers: {
            'x-amz-tagging-directive': 'COPY'
        }
    })
    expect(copyObject).toBeObject();
});

test('createBucket', async () => {
    const createBucket = await s3a.createBucket({
        Bucket: 'khalisafkari'
    });
    expect(createBucket).toBe('');
})

test('deleteBucket', async () => {
    const deleteBucket = await s3a.deleteBucket({
        Bucket: 'khalisafkari'
    });
    expect(deleteBucket).toBe('');
});

test('deleteObject', async () => {
    const deleteObject = await s3a.deleteObject({
        Bucket: 'afkari',
        Key: 'build.ts',
    })
    expect(deleteObject).toBe('')
})

// test('getBucketPolicy', async () => {
//     const getBucketPolicy = await s3a.getBucketPolicy({ Bucket: 'khalis' });
//     console.log('error', getBucketPolicy)
// })

test('createBucketMetadataTableConfiguration', async () => {
    const createBucketMetadataTableConfiguration = await s3a.createBucketMetadataTableConfiguration({
        Bucket: 'afkari',
        Configuration: {
            MetadataTableConfiguration: '',
            S3TablesDestination: ''
        }
    });
    expect(createBucketMetadataTableConfiguration).toBeObject()
})

test('getObjectTagging', async () => {
    const getObjectTagging = await s3a.getObjectTagging({ Bucket: 'khalis', Key: 'build.ts' })
    expect(getObjectTagging).toMatchObject(/Tagging/)
})

test('headBucket', async () => {
    const headBucket = await s3a.headBucket({ Bucket: 'khalis' });
    expect(headBucket).toBe("")
})