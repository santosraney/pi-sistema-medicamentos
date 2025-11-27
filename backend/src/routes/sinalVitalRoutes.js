const express = require('express')
const router = express.Router()

const controller = require('../controllers/sinalVitalController')
const auth = require('../middleware/auth')

// Criar sinal vital
router.post('/', auth, controller.create)

// Listar sinais
router.get('/', auth, controller.list)

// Buscar por ID
router.get('/:id', auth, controller.get)

// Atualizar sinal
router.put('/:id', auth, controller.update)

// Deletar sinal
router.delete('/:id', auth, controller.remove)

module.exports = router
