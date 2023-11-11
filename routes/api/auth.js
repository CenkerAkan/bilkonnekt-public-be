const express = require('express')
const router = express.Router()
const authControllers = require('../../controllers/authController')
const authMiddleware = require('../../middleware/auth')


router.post('/register', authControllers.register)

router.post('/login', authControllers.login)

router.post('/logout', authControllers.logout)

router.post('/refresh', authControllers.refresh)

router.get('/user', authMiddleware, authControllers.user)

router.post('/prereg', authControllers.prereg)

router.get('/getProfile', authMiddleware, authControllers.getProfile)
module.exports = router