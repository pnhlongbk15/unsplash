const crypto = require('crypto');

const ACCESS_SECRET = crypto.randomBytes(16).toString('hex')
const REFRESH_SECRET = crypto.randomBytes(16).toString('hex')

console.table({ ACCESS_SECRET, REFRESH_SECRET })
