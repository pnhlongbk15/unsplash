const { searchPasswordUserById } = require('../services/user.service')
const { verifyPassword } = require('../helpers/password')

const { ErrResponse } = require('../helpers/feedback')

module.exports = {
        verifyPasswordForUpdate: (req, res, next) => {
                if (req.body.currPassword) {
                        searchPasswordUserById(req.user.id).then((result) => {

                                verifyPassword(req.body.currPassword, result.data.password).then((result) => {
                                        const isValid = result.data;
                                        if (isValid) {
                                                next()
                                        } else {
                                                return res.status(400).json(new ErrResponse(400, result.message))
                                        }
                                })
                        }).catch((error) => res.status(404).json(new ErrResponse(404, error.message)))
                } else {
                        return res.status(401).json(new ErrResponse(401, 'Please enter a password !'))
                }

        }
}