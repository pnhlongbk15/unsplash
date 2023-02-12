const { verifyToken } = require('../services/token.service')

const { ErrResponse } = require('../helpers/feedback')
module.exports = {
   authUser: async (req, res, next) => {
      try {
         const bearsToken = req.headers.authorization;
         const accessToken = bearsToken.split(' ')[1];
         if (!accessToken) {
            return res.status(401).json(new ErrResponse(401, "You're not authenticated"));
         } else {
            verifyToken(accessToken)
               .then((result) => {
                  req.user = result.data;
                  next()
               })
               .catch((error) => {
                  return res.status(400).json(new ErrResponse(400, error.message))
               })
         }
      } catch (error) {
         return res.status(500).json(new ErrResponse(500, error.message))
      }
   },
   authAdmin: (req, res, next) => {
      const { isAdmin } = req.user;
      if (!isAdmin) {
         return res.status(401).json(new ErrResponse(401, "You're not allowed to access"))
      } else {
         next()
      }
   }
}