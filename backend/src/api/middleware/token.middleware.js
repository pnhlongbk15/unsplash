const {
        requestAccessToken,
        storeRefreshToken
} = require('../services/token.service')

module.exports = {
        resetToken: async (req, res) => {
                const refreshToken = req.cookie.authorization
                if (!refreshToken) return res.status(401).send("You're not authenticated")
                else {
                        try {
                                const { newAccessToken, newRefreshToken } = await requestAccessToken(refreshToken);
                                storeRefreshToken(newRefreshToken)
                                res.cookie("refreshToken", newRefreshToken, {
                                        httpOnly: true,
                                        secure: false,
                                        path: "/",
                                        sameSite: "strict"
                                })
                                res.status(200).json({ accessToken: `Bears ${newAccessToken}` })
                        } catch (error) {
                                res.status(403).json('proceess refresh user not success')
                        }
                }
        }
}