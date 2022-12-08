const mongoose = require('mongoose')

const chuckSchema = new mongoose.Schema({
        files_id: {
                type: mongoose.Schema.Types.ObjectId,
                require: true,
                ref: 'images.files'
        },
        n: Number,
        data: String
})

module.exports.ImageChuck = mongoose.model('image.chucks', chuckSchema, 'image.chucks')