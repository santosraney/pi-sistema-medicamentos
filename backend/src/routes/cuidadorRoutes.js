const express = require('express')
const router = express.Router()

const controller = require('../controllers/cuidadorController')

// Middleware para proteger com JWT
const auth = require('../middleware/auth')


// Criar cuidador
router.post('/', auth, controller.create)

// Listar todos
router.get('/', auth, controller.list)

// Buscar por ID
router.get('/:id', auth, controller.get)

// Atualizar
router.put('/:id', auth, controller.update)

// Remover
router.delete('/:id', auth, controller.remove)


module.exports = router
