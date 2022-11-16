const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        first_name: {
                type: String,
                required: true,
        },
        last_name: {
                type: String,
                required: true,
        },
        email: {
                type: String,
                required: true,
                minlength: 10,
                maxlength: 50,
                unique: true
        },
        password: {
                type: String,
                required: true,
                minlength: 8
        },
        admin: {
                type: Boolean,
                default: false
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
}, { timestamps: true });

module.exports = mongoose.model('Users', userSchema);