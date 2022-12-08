const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
        refreshToken: {
                type: String,
                unique: true
        }
}, { timestamps: true })

module.exports.TokenColl = mongoose.model('Token', tokenSchema, 'Token')