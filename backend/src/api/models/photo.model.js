const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
        id: {
                type: String,
                unique: true,
                default: 0
        },
        description: {
                type: String,
        },
        user: {
                
        }
}, { timestamps: true })

module.exports.PhotoColl = mongoose.model('Photo', photoSchema)