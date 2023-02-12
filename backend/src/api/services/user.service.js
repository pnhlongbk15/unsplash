const mongoose = require('mongoose')
const { UserColl } = require('../models/user.model')

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

                        new UserColl({
                                first_name,
                                last_name,
                                email,
                                username,
                                password
                        })
                                .save()
                                .then(() => resolve(new ModelResponse('success')))
                                .catch((error) => reject(new ModelResponse(error.message)))
                })
        },
        searchUserByEmail: (email) => {
                return new Promise((resolve, reject) => {
                        /* value return include password is required*/
                        UserColl.findOne({ email }).then((result) => {
                                if (result) {
                                        resolve(new ModelResponse('success', result))
                                } else {
                                        reject(new ModelResponse('Email is invalid'))
                                }
                        }).catch((error) => reject(new ModelResponse(error.message)))
                })
        },
        searchUserById: (id) => {
                return new Promise((resolve, reject) => {
                        const _id = mongoose.Types.ObjectId(id)
                        UserColl.findById(_id, '-_id -password -createdAt -updatedAt').then((result) => {
                                if (result) {
                                        resolve(new ModelResponse('success', result))
                                } else {
                                        reject(new ModelResponse('User does not exist'))
                                }
                        }).catch((error) => reject(new ModelResponse(error.message)))
                })
        },
        updateUser: (id, newInfo) => {
                return new Promise((resolve, reject) => {
                        const _id = mongoose.Types.ObjectId(id)
                        UserColl.findOneAndUpdate({ _id }, { $set: newInfo }).then((result) => {
                                if (result.length > 0) {
                                        resolve(new ModelResponse('Update successful'))
                                } else {
                                        reject(new ModelResponse('User does not exist'))
                                }
                        }).catch((error) => reject(new ModelResponse(error.message)))
                })
        },
        searchPasswordUserById: async (id) => {
                return new Promise((resolve, reject) => {
                        const _id = mongoose.Types.ObjectId(id)
                        UserColl.findById(_id, 'password -_id')
                                .then((result) => resolve(new ModelResponse('success', result)))
                                .catch((error) => reject(new ModelResponse(error.message)))
                })
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