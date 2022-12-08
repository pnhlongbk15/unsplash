const { verifyToken } = require('../services/token.service')

module.exports = {
        authUser: async (req, res, next) => {
                const bearsToken = req.headers.authorization;
                const accessToken = bearsToken.split(' ')[1];
                if (!accessToken) {
                        return res.status(401).json("You're not authenticated");
                } else {
                        try {
                                const info = await verifyToken(accessToken);
                                req.user = info;
                                next()
                        } catch (error) {
                                return res.status(403).json("Token is not valid")
                        }
                }
        },
        authAdmin: (req, res, next) => {
                const { isAdmin } = req.user;
                if (!isAdmin) {
                        return res.status(403).json("You're not allowed to access")
                } else {
                        next()
                }
        }
}