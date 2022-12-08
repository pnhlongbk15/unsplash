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
                                .then((resolve) => {
                                        return res.status(201).json(new APIResponse(201, 'Register successful'))
                                })
                                .catch((reject) => {
                                        return res.status(500).json(new ErrResponse(500, reject.error));
                                })
                } catch (err) {
                        res.status(400).json(new ErrResponse(400, err.message));
                }
        },
        loginUser: async (req, res) => {
                try {
                        let user = await searchUserByEmail(req.body.email)
                                .then((resolve) => resolve.data)
                                .catch((reject) => {
                                        return res.status(400).json(new ErrResponse(400, "Email is invalid"));
                                })

                        const isValid = await verifyPassword(req.body.password, user.password)
                                .then((isValid) => {
                                        if (!isValid) {
                                                return res.status(400).json(new ErrResponse(400, "Wrong password"));
                                        } else {
                                                return isValid
                                        }
                                })
                                .catch((err) => {
                                        return res.status(500).json(new ErrResponse(500, err.message));
                                })

                        if (user && isValid) {
                                const accessToken = generateAccessToken(user);
                                const refreshToken = generateRefreshToken(user);
                                storeRefreshToken(refreshToken)
                                        .then((resolve) => {
                                                try {
                                                        if (resolve.code === 1) {
                                                                // save token into cookie
                                                                res.cookie("refreshToken", refreshToken, {
                                                                        httpOnly: true,
                                                                        secure: false,
                                                                        path: "/",
                                                                        sameSite: "strict"
                                                                })
                                                                res.status(200).json(new APIResponse(200, "success", { accessToken: `Bears ${accessToken}` }))
                                                        }
                                                } catch (err) {
                                                        res.status(500).json(new ErrResponse(500, err.message));
                                                }
                                        })
                                        .catch((reject) => {
                                                reject.code === 0 && res.status(500).json(new ErrResponse(500, reject.error));
                                        })
                        }
                } catch (err) {
                        res.status(400).json(new ErrResponse(400, err.message));
                }
        },
        getMe: async (req, res) => {
                try {
                        const user = await searchUserById(req.user.id);
                        res.status(200).json(new APIResponse(200, "success", user))
                } catch (err) {
                        res.status(400).json(new ErrResponse(400, err.message))
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

                        await updateUser(req.user.id, newInfo)
                        res.status(200).json(new APIResponse())
                } catch (err) {
                        res.status(500).json(new ErrResponse())
                }
        }
}


