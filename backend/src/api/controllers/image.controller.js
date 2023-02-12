const { updateUser, searchUserById } = require('../services/user.service')
const { getImgProfile, deleteImgProfile } = require('../services/image.service')

const { APIResponse, ErrResponse } = require('../helpers/feedback')


module.exports = {
    displayImgProfile: async (req, res) => {
        try {
            // result.data.pipe(res)
            const { id } = req.params;
            console.log('id', id)
            // res.status(200).send('ok')
            getImgProfile(id)
                .then((result) => {
                    console.log(result)
                    res.status(200).send('ok')
                })
                .catch((error) => res.status(404).json(new ErrResponse(404, error.message)))
        } catch (error) {
            return res.status(500).json(new ErrResponse(500, error.message))
        }
    },
    // through authUser
    updateImgProfile: (req, res) => {
        try {
            var newInfo = {
                profile_image: req.file.id
            }
            updateUser(req.user.id, newInfo)
                .then((result) => res.status(201).json(new APIResponse(201, result.message)))
                .catch((error) => res.status(404).json(new APIResponse(404, error.message)))
        } catch (error) {
            return res.status(500).json(new ErrResponse(500, error.message))
        }
    },

    removeImgProfile: (req, res) => {
        try {
            const id = req.user.id
            const infoImageDefault = {
                profile_image: process.env.IMAGE_PROFILE_DEFAULT_ID
            }
            searchUserById(id).then((result) => {
                // cần id image nền cần find
                // update lại thì không nhận được id
                updateUser(id, infoImageDefault).then(() => {

                    deleteImgProfile(resolve.data.profile_image)
                        .then((result) => res.status(201).json(new APIResponse(201, result.message)))
                        .catch((error) => res.status(404).json(new ErrResponse(404, error.message)))

                }).catch((error) => res.status(404).json(new ErrResponse(404, error.message)))

            }).catch((error) => res.status(404).json(new ErrResponse(404, error.message)))
        } catch (err) {
            res.status(500).json(new ErrResponse(500, err.message))
        }
    }
}