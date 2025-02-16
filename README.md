# S3Operations with AWSSignatureV4

This repository provides an implementation for interacting with an S3-compatible storage service using AWS Signature Version 4 authentication. The `S3Operations` class enables various S3 operations such as creating, deleting, and managing buckets and objects.

## Prerequisites

Ensure you have the following installed:
- [Bun](https://bun.sh/) (JavaScript runtime)
- AWS Credentials (Access Key ID, Secret Access Key, and Region)
- An S3-compatible storage endpoint

## Installation

Clone the repository and install dependencies:

```sh
bun install
```

## Configuration

### Setting Up AWS Signature Version 4

To authenticate S3 requests, initialize the `AWSSignatureV4` class with your AWS credentials:

```typescript
const signature = new AWSSignatureV4(
    client.accessKeyId!,
    client.secretAccessKey!,
    client.region,
    's3',
);
```

### Connecting to an S3-Compatible Storage

Create an instance of `S3Operations` with your S3-compatible storage endpoint:

```typescript
const s3a = new S3Operations('https://s3.nevaobjects.id', signature);
```

## Usage

### Bucket Operations

- **Create a bucket:**
  ```typescript
  await s3a.createBucket({ Bucket: 'my-bucket' });
  ```

- **Delete a bucket:**
  ```typescript
  await s3a.deleteBucket({ Bucket: 'my-bucket' });
  ```

- **List all buckets:**
  ```typescript
  const buckets = await s3a.listBuckets();
  console.log(buckets);
  ```

### Object Operations

- **Upload an object:**
  ```typescript
  const file = Bun.file('./sample.txt');
  await s3a.putObject({ Bucket: 'my-bucket', Key: 'sample.txt', Body: file });
  ```

- **Retrieve an object:**
  ```typescript
  const object = await s3a.getObject({ Bucket: 'my-bucket', Key: 'sample.txt' });
  console.log(object);
  ```

- **Delete an object:**
  ```typescript
  await s3a.deleteObject({ Bucket: 'my-bucket', Key: 'sample.txt' });
  ```

### Generating a Presigned URL

Generate a temporary URL to access an object:

```typescript
const url = await s3a.presign({ Bucket: 'my-bucket', Key: 'sample.txt' });
console.log(url);
```

## Running Tests

Run the test suite to validate the implementation:

```sh
bun test
```

## License

This project is licensed under the MIT License.

