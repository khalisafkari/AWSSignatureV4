const client = {
    endpoint: 'https://s3.nevaobjects.id',
    region: 'auto',
    accessKeyId: process.env["ACCESS_KEY_ID"],
    secretAccessKey: process.env['SECRET_ACCESS_KEY'],
    bucket: 'khalis',
}

export default client