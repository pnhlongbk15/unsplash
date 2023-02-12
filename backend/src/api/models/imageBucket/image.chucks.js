const mongoose = require('mongoose')

const chunkSchema = new mongoose.Schema({
        files_id: {
                type: mongoose.Schema.Types.ObjectId,
                require: true,
                ref: 'images.files'
        },
        n: Number,
        data: String
})

module.exports.ImageChuck = mongoose.model('image.chunks', chunkSchema, 'image.chunks')