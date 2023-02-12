const {
   requestAccessToken,
   storeRefreshToken
} = require('../services/token.service')

const { APIResponse, ErrResponse } = require('../helpers/feedback')

module.exports = {
   resetToken: async (req, res) => {
      try {
         const refreshToken = req.cookie.authorization
         if (!refreshToken) return res.status(401).json(new ErrResponse(401, "You're not authenticated"))
         else {
            requestAccessToken(refreshToken).then((result) => {
               const { newAccessToken, newRefreshToken } = result.data;

               storeRefreshToken(newRefreshToken).then((result) => {
                  res.cookie("refreshToken", newRefreshToken, {
                     httpOnly: true,
                     secure: false,
                     path: "/",
                     sameSite: "strict"
                  })
                  return res.status(201).json(new APIResponse(201, result.message, { accessToken: `Bears ${newAccessToken}` }))
               }).catch((error) => res.status(500).send(new ErrResponse(500, error.message)))

            }).catch((error) => res.status(400).send(new ErrResponse(400, error.message)))
         }
      } catch (error) {
         return res.status(500).send(new ErrResponse(500, error.message))
      }
   }
}