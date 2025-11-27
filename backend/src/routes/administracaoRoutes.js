const express = require('express')
const router = express.Router()

const controller = require('../controllers/administracaoController')
const auth = require('../middleware/auth') 

// Criar registro
router.post('/', auth, controller.create)

// Listar registros
router.get('/', auth, controller.list)

// Buscar por ID
router.get('/:id', auth, controller.get)

// Atualizar registro
router.put('/:id', auth, controller.update)

// Deletar registro
router.delete('/:id', auth, controller.remove)

module.exports = router
