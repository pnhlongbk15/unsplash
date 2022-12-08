const jwt = require("jsonwebtoken");
const { TokenColl } = require('../models/token.model')

const { ModelResponse } = require('../helpers/feedback')

var that = module.exports = {
        storeRefreshToken: (refreshToken) => {
                return new Promise((resolve, reject) => {
                        new TokenColl({
                                refreshToken: refreshToken
                        })
                                .save()
                                .then(() => resolve(new ModelResponse()))
                                .catch((error) => reject(new ModelResponse(0, error.message)))
                })
        },
        generateAccessToken: (user) => {
                return jwt.sign(
                        {
                                id: user.id,
                                isAdmin: user.isAdmin,
                        },
                        process.env.ACCESS_SECRET_KEY,
                        { expiresIn: "365d" }
                );
        },
        generateRefreshToken: (user) => {
                return jwt.sign(
                        {
                                id: user.id,
                                isAdmin: user.isAdmin,
                        },
                        process.env.REFRESH_SECRET_KEY,
                        { expiresIn: "365d" }
                );
        },
        verifyToken: (accessToken) => {
                return new Promise((resolve, reject) => {
                        jwt.verify(
                                accessToken,
                                process.env.ACCESS_SECRET_KEY,
                                (err, payload) => {
                                        if (err) {
                                                reject(err)
                                        } else {
                                                resolve(payload)
                                        }
                                }
                        )
                })
        },
        requestAccessToken: (refreshToken) => {
                return new Promise((resolve, reject) => {
                        jwt.verify(
                                refreshToken,
                                process.env.REFRESH_SECRET_KEY,
                                async (err, payload) => {
                                        if (err) {
                                                reject(err)
                                        } else {
                                                await TokenColl.findOneAndDelete({
                                                        refreshToken
                                                }).then(() => console.log("Deleted older refreshToken"))

                                                const newAccessToken = that.generateAccessToken(payload);
                                                const newRefreshToken = that.generateRefreshToken(payload);
                                                resolve({ newAccessToken, newRefreshToken })
                                        }
                                }
                        )
                })
        }
}