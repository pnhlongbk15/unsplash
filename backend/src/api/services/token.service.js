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
            .then(() => resolve(new ModelResponse('success')))
            .catch((error) => reject(new ModelResponse(error.message)))
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
            (error, payload) => {
               if (error) {
                  reject(new ModelResponse(error.message))
               } else {
                  resolve(new ModelResponse('success', payload))
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
            (error, payload) => {
               if (error) {
                  reject(new ModelResponse(error.message))
               } else {
                  TokenColl.findOneAndDelete({ refreshToken }).then((result) => { // return finded object 
                     if (result.length > 0) {
                        const newAccessToken = that.generateAccessToken(payload);
                        const newRefreshToken = that.generateRefreshToken(payload);
                        resolve(new ModelResponse('success', { newAccessToken, newRefreshToken }))
                     } else {
                        reject(new ModelResponse('Refresh token does not reset'))
                     }
                  }).catch((error) => reject(new ModelResponse(error.message)))
               }
            }
         )
      })
   }
}