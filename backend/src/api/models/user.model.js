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
        username: {
                type: String,
                required: true,
                minlength: 10,
                maxlength: 20,
                unique: true
        },
        password: {
                type: String,
                required: true,
                minlength: 8
        },
        isAdmin: {
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
                type: mongoose.Schema.Types.ObjectId,
                ref: 'images.files',
                default: mongoose.Types.ObjectId(process.env.IMAGE_PROFILE_DEFAULT_ID)
        }
}, { timestamps: true });

module.exports.UserColl = mongoose.model('User', userSchema, 'User');