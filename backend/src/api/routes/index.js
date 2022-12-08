const router = require("express").Router()

router.use('/user', require("./user.route"));
router.use('/photo', require("./photo.route"));
router.use('/image', require("./image.route"));

module.exports = router;