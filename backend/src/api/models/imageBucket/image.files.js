const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
        length: Number,
        chuckSize: Number,
        uploadDate: Date,
        filename: String,
        contentType: String
})

module.exports.ImageFile = mongoose.model('image.files', fileSchema, 'image.files')