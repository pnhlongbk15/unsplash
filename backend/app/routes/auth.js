const router = require("express").Router();

const authControllers = require(__path_controllers + 'authControllers');

router.post('/register', authControllers.registerUser)

module.exports = router;