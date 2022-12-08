const router = require("express").Router();
const { store } = require("../../configs/GridFs.config")

const { authUser } = require('../middleware/auth.middleware')
const { updateImgProfile, displayImgProfile, removeImgProfile } = require('../controllers/image.controller')


// @desc Uploads file to DB
router.post('/update', authUser, store.single('file'), updateImgProfile)
router.get('/image_profile/:id', displayImgProfile)
router.get('/delete', removeImgProfile)

module.exports = router;