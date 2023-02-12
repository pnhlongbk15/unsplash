const bcrypt = require("bcrypt");

const { ModelResponse } = require('../helpers/feedback')

module.exports = {
        encodeString: async (string) => {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(string, salt);
                return hashedPassword
        },
        verifyPassword: (passInClient, passInData) => {
                return new Promise(async (resolve, reject) => {
                        console.log(passInClient,passInData)
                        await bcrypt.compare(
                                passInClient,
                                passInData
                        ).then((result) => {
                                if (result) {
                                        resolve(new ModelResponse('success', result))
                                } else {
                                        resolve(new ModelResponse('Password is invalid', result))
                                }
                        }).catch((error) => reject(new ModelResponse(error.message)))
                })
        }
}