const router = require("express").Router();
const { registerUser, loginUser, getMe, updateInfoUser } = require('../controllers/user.controller')
const { authUser } = require('../middleware/auth.middleware')
const { verifyPasswordForUpdate } = require('../middleware/user.middleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/getMe', authUser, getMe)
router.post('/update', authUser, verifyPasswordForUpdate, updateInfoUser)

module.exports = router;