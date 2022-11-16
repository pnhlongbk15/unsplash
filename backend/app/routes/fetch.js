const router = require("express").Router();

const fetchControllers = require(__path_controllers + 'fetchControllers');

router.post('/photos', fetchControllers.photos)

module.exports = router;