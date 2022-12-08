const path = require('path');

module.exports = {
        checkFileType: (file, callback) => {
                const filetypes = /jpeg|jpg|png|gif/;
                const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
                const mimetype = filetypes.test(file.mimetype);

                if (mimetype && extname) return callback(null, true);

                callback('filetype')
        }
}