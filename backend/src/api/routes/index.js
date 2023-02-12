const router = require("express").Router()

router.use('/user', require("./user.route"));
router.use('/image', require("./image.route"));
router.use('/photo', require("./photo.route"));

module.exports = router;