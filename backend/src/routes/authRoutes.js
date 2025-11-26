const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.post('/register', authController.register) // Opicional: só pra criar admin rápido
router.post('/login', authController.login)

module.exports = router
