const { searchPasswordUserById } = require('../services/user.service')
const { verifyPassword } = require('../helpers/password')

module.exports = {
        verifyPasswordForChange: async (req, res, next) => {
                console.log('verifyPasswordForChange')
                if (req.body.currPassword) {
                        const password = await searchPasswordUserById(req.user.id).then((data) => data.password)
                        console.log(password)

                        const isValid = await verifyPassword(req.body.currPassword, password)
                        if (isValid) {
                                next()
                        } else {
                                res.status(200).json('password khong khop')
                        }
                } else {
                        next()
                }

        }
}