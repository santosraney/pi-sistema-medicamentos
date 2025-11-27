const express = require('express')
const router = express.Router()

// Importa o controller
const authController = require('../controllers/authController')
const auth = require('../middleware/auth')


// Rota para registrar novo administrador
// (use apenas no início do projeto)
router.post('/register', authController.register)

// Rota de login
router.post('/login', authController.login)

module.exports = router
