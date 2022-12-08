const mongoose = require('mongoose')
const User = require('../models/user.model')

const { ModelResponse } = require('../helpers/feedback')

module.exports = {
        createUser: ({
                first_name,
                last_name,
                email,
                username,
                password
        }) => {
                return new Promise((resolve, reject) => {

                        new User({
                                first_name,
                                last_name,
                                email,
                                username,
                                password
                        })
                                .save()
                                .then(() => resolve(new ModelResponse()))
                                .catch((error) => reject(new ModelResponse(0, error.message)))
                })
        },
        searchUserByEmail: (email) => {
                return new Promise((resolve, reject) => {
                        /* value return include password is required*/
                        User.findOne({ email })
                                .then((result) => resolve(new ModelResponse(1, '', result)))
                                .catch((error) => reject(new ModelResponse(0, error.message)))
                })
        },
        searchUserById: async (id) => {
                try {
                        const _id = mongoose.Types.ObjectId(id)
                        return await User.findById(_id, '-_id -password -createdAt -updatedAt')
                } catch (err) {
                        console.error('searchUser:', err.message)
                }
        },
        searchPasswordUserById: async (id) => {
                try {
                        const _id = mongoose.Types.ObjectId(id)
                        return await User.findById(_id, 'password -_id')
                } catch (err) {
                        console.error('searchPasswordUser:', err.message)
                }
        },
        updateUser: async (id, newInfo) => {
                try {
                        const _id = mongoose.Types.ObjectId(id)
                        await User.findOneAndUpdate({ _id }, newInfo)
                } catch (err) {
                        console.error('updateUser:', err.message)
                }
        },
}


/*
 lookupImageUser: async () => {
                try {
                        const user = await User.aggregate([
                                {
                                        $lookup: {
                                                from: 'images',
                                                localField: 'profile_image',
                                                foreignField: '_id'

                                        }

                                },
                                {
                                        $unwind: '$images'
                                },
                                {
                                        $project: {

                                        }
                                }
                        ])
                } catch (err) {

                }
        }
 */