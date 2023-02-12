const { createUser, searchUserByEmail, searchUserById, updateUser } = require('../services/user.service')
const {
   generateAccessToken,
   generateRefreshToken,
   storeRefreshToken,
} = require('../services/token.service')
const { encodeString, verifyPassword } = require('../helpers/password')

const { APIResponse, ErrResponse } = require('../helpers/feedback')


module.exports = {
   registerUser: async (req, res) => {
      try {
         const password = await encodeString(req.body.password)
         const newUser = {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password
         }
         createUser(newUser)
            .then((result) => {
               return res.status(201).json(new APIResponse(201, result.message))
            })
            .catch((error) => {
               return res.status(400).json(new ErrResponse(400, error.message));
            })
      } catch (error) {
         res.status(400).json(new ErrResponse(400, error.message));
      }
   },

   loginUser: (req, res) => {
      try {
         searchUserByEmail(req.body.email).then((result) => {
            const user = result.data

            verifyPassword(req.body.password, user.password).then((result) => {
               const isValid = result.data
               if (isValid) {
                  const accessToken = generateAccessToken(user);
                  const refreshToken = generateRefreshToken(user);

                  storeRefreshToken(refreshToken).then((result) => {
                     try {
                        // save token into cookie
                        res.cookie("refreshToken", refreshToken, {
                           httpOnly: true,
                           secure: false,
                           path: "/",
                           sameSite: "strict"
                        })
                        return res.status(200).json(new APIResponse(200, result.message, { accessToken: `Bears ${accessToken}` }))
                     } catch (error) {
                        return res.status(500).json(new ErrResponse(500, error.message));
                     }
                  }).catch((error) => {
                     return res.status(400).json(new ErrResponse(400, error.message));
                  })

               } else {
                  return res.status(400).json(new ErrResponse(400, result.message));
               }
            }).catch((error) => res.status(400).json(new ErrResponse(400, error.message)))
         }).catch((error) => res.status(400).json(new ErrResponse(400, error.message)))

      } catch (error) {
         res.status(500).json(new ErrResponse(500, error.message));
      }
   },

   getMe: (req, res) => {
      try {
         searchUserById(req.user.id)
            .then((result) => res.status(200).json(new APIResponse(200, result.message, result.data)))
            .catch((error) => res.status(404).json(new ErrResponse(404, error.message)))
      } catch (error) {
         return res.status(500).json(new ErrResponse(500, error.message))
      }
   },

   updateInfoUser: async (req, res) => {
      console.log('updateInfoUser')
      try {
         var newInfo;
         if (req.body.newPassword) {
            const password = await encodeString(req.body.newPassword)
            newInfo = {
               password,
            }
         } else {
            newInfo = {
               first_name: req.body.firstName,
               last_name: req.body.lastName,
               email: req.body.email,
               username: req.body.username,
            }
         }

         updateUser(req.user.id, newInfo)
            .then((result) => res.status(201).json(new APIResponse(201, result.message)))
            .catch((error) => res.status(404).json(new APIResponse(404, error.message)))
      } catch (error) {
         return res.status(500).json(new ErrResponse(500, error.message))
      }
   }
}


