const express = require('express')
const router = express.Router()

const controller = require('../controllers/doencaController')

// Middleware JWT (protege as rotas)
const auth = require('../middleware/auth')


// Criar doença
router.post('/', auth, controller.create)

// Listar doenças
router.get('/', auth, controller.list)

// Buscar por ID
router.get('/:id', auth, controller.get)

// Atualizar doença
router.put('/:id', auth, controller.update)

// Deletar doença
router.delete('/:id', auth, controller.remove)

module.exports = router
