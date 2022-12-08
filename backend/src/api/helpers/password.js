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
                        await bcrypt.compare(
                                passInClient,
                                passInData
                        )
                                .then((isValid) => resolve(new ModelResponse(1, '', isValid)))
                                .catch((error) => reject(new ModelResponse(0, error.message)))
                })
        }
}