const express = require('express')
const router = express.Router()

const controller = require('../controllers/eventoAdversoController')
const auth = require('../middleware/auth')

// Criar evento
router.post('/', auth, controller.create)

// Listar eventos
router.get('/', auth, controller.list)

// Buscar por ID
router.get('/:id', auth, controller.get)

// Atualizar
router.put('/:id', auth, controller.update)

// Deletar
router.delete('/:id', auth, controller.remove)

module.exports = router
