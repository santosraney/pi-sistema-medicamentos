const express = require('express')
const router = express.Router()

const controller = require('../controllers/medicamentoController')
const auth = require('../middleware/auth')

// Criar medicamento
router.post('/', auth, controller.create)

// Listar medicamentos
router.get('/', auth, controller.list)

// Buscar por ID
router.get('/:id', auth, controller.get)

// Atualizar medicamento
router.put('/:id', auth, controller.update)

// Remover medicamento
router.delete('/:id', auth, controller.remove)

module.exports = router 
