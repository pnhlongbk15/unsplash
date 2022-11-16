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
                username: {
                        type: String,
                        required: true,
                        unique: true,
                        minlength: 6,
                        maxlength: 20,
                },
                total_collections: {
                        type: Number,
                        default: 0
                },
                total_likes: {
                        type: Number,
                        default: 0
                },
                total_photos: {
                        type: Number,
                        default: 0
                },
                profile_image: {
                        small: {
                                type: String,
                                default: null
                        },
                        medium: {
                                type: String,
                                default: null
                        },
                        large: {
                                type: String,
                                default: null
                        }
                }
        }
}, { timestamps: true })

module.exports = mongoose.model('Photos', photoSchema)