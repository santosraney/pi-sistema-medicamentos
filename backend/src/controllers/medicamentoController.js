const Medicamento = require('../models/Medicamento')
const Idoso = require('../models/Idoso')
const Estoque = require('../models/Estoque')
const Administracao = require('../models/Administracao')

// =======================================
// CRIAR MEDICAMENTO
// =======================================
exports.create = async (req, res) => {
    try {
        const { idosoId } = req.body

        // Verifica se o idoso existe
        const idoso = await Idoso.findByPk(idosoId)
        if (!idoso) {
            return res.status(404).json({ error: "Idoso não encontrado" })
        }

        // Cria medicamento
        const novo = await Medicamento.create(req.body)

        res.status(201).json(novo)

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// =======================================
// LISTAR MEDICAMENTOS
// =======================================
exports.list = async (req, res) => {
    try {
        const lista = await Medicamento.findAll({
            include: [
                { model: Idoso },
                { model: Estoque },
                { model: Administracao }
            ]
        })

        res.json(lista)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// =======================================
// BUSCAR MEDICAMENTO POR ID
// =======================================
exports.get = async (req, res) => {
    try {
        const medicamento = await Medicamento.findByPk(req.params.id, {
            include: [
                { model: Idoso },
                { model: Estoque },
                { model: Administracao }
            ]
        })

        if (!medicamento) {
            return res.status(404).json({ error: "Medicamento não encontrado" })
        }

        res.json(medicamento)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// =======================================
// ATUALIZAR MEDICAMENTO
// =======================================
exports.update = async (req, res) => {
    try {
        const medicamento = await Medicamento.findByPk(req.params.id)

        if (!medicamento) {
            return res.status(404).json({ error: "Medicamento não encontrado" })
        }

        await medicamento.update(req.body)

        res.json(medicamento)

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// =======================================
// REMOVER MEDICAMENTO
// =======================================
exports.remove = async (req, res) => {
    try {
        const medicamento = await Medicamento.findByPk(req.params.id)

        if (!medicamento) {
            return res.status(404).json({ error: "Medicamento não encontrado" })
        }

        await medicamento.destroy()

        res.json({ message: "Medicamento removido com sucesso" })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
