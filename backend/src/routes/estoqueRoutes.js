const express = require('express')
const router = express.Router()

const controller = require('../controllers/estoqueController')
const auth = require('../middleware/auth')

// Criar estoque
router.post('/', auth, controller.create)

// Listar estoques
router.get('/', auth, controller.list)

// Buscar por ID
router.get('/:id', auth, controller.get)

// Atualizar estoque
router.put('/:id', auth, controller.update)

// Remover estoque
router.delete('/:id', auth, controller.remove)

module.exports = router
