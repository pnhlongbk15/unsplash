const multer = require('multer');
const { GridFsStorage } = require("multer-gridfs-storage");

require('dotenv').config();
const crypto = require('crypto');
const path = require('path');
const { checkFileType } = require('../api/helpers/validation');


const storage = new GridFsStorage({
        url: process.env.MONGODB_URL_AUTH,
        file: (req, file) => {
                return new Promise((resolve, reject) => {
                        crypto.randomBytes(16, (err, buf) => {
                                if (err) {
                                        return reject(err);
                                }

                                const filename = buf.toString('hex') + path.extname(file.originalname);
                                const fileInfo = {
                                        filename: filename,
                                        bucketName: 'image'
                                };
                                resolve(fileInfo);
                        });

                });
        }
})

module.exports.store = multer({
        storage,
        limits: { fileSize: 20000000 },
        fileFilter: (req, file, callback) => {
                checkFileType(file, callback)
        }
});
