const mongoose = require('mongoose');

const { updateUser } = require('../services/user.service')
const { getImgProfile } = require('../services/image.service')

const { APIResponse, ErrResponse } = require('../helpers/feedback')


module.exports = {
        updateImgProfile: (req, res) => {
                try {
                        var newInfo = {
                                profile_image: req.file.id
                        }
                        updateUser(req.user.id, newInfo)
                        res.status(200).json(new APIResponse(200, 'update Image success'))
                } catch (err) {
                        res.status(500).json(new ErrResponse(400, err.message))
                }
        },
        displayImgProfile: async (req, res) => {
                try {
                        const { id } = req.params;
                        const _id = mongoose.Types.ObjectId(id);

                        getImgProfile(_id)
                                .then((file) => file.pipe(res))
                                .catch((err) => {
                                        if (err.status == 500) {
                                                return res.status(500).json(err)
                                        } else {
                                                return res.status(404).json(err)
                                        }
                                })
                } catch (err) {
                        return res.status(404).json(new ErrResponse(500, 'Process get image is error'))
                }
        },
        removeImgProfile: (req, res) => {
                const id = '638793177d20d38b301f5db9'
                const _id = mongoose.Types.ObjectId(id)
                try {
                        res.status(200).json(new APIResponse(200, 'remove Img Profile'))
                } catch (err) {
                        res.status(401).json(new ErrResponse(400, 'error'))
                }
        }
}