const Estoque = require('../models/Estoque')
const Medicamento = require('../models/Medicamento')

// =======================================
// CRIAR registro de estoque
// =======================================
exports.create = async (req, res) => {
    try {
        const { medicamentoId } = req.body

        // Verifica se o medicamento existe
        const medicamento = await Medicamento.findByPk(medicamentoId)

        if (!medicamento) {
            return res.status(404).json({ error: "Medicamento não encontrado" })
        }

        // Cria o estoque
        const novoEstoque = await Estoque.create(req.body)

        res.status(201).json(novoEstoque)

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// =======================================
// LISTAR todos os estoques
// =======================================
exports.list = async (req, res) => {
    try {
        const estoques = await Estoque.findAll({
            include: { model: Medicamento }
        })

        res.json(estoques)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// =======================================
// BUSCAR estoque por ID
// =======================================
exports.get = async (req, res) => {
    try {
        const estoque = await Estoque.findByPk(req.params.id, {
            include: { model: Medicamento }
        })

        if (!estoque) {
            return res.status(404).json({ error: "Registro de estoque não encontrado" })
        }

        res.json(estoque)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// =======================================
// ATUALIZAR estoque
// =======================================
exports.update = async (req, res) => {
    try {
        const estoque = await Estoque.findByPk(req.params.id)

        if (!estoque) {
            return res.status(404).json({ error: "Registro de estoque não encontrado" })
        }

        await estoque.update(req.body)

        res.json(estoque)

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// =======================================
// REMOVER estoque
// =======================================
exports.remove = async (req, res) => {
    try {
        const estoque = await Estoque.findByPk(req.params.id)

        if (!estoque) {
            return res.status(404).json({ error: "Registro de estoque não encontrado" })
        }

        await estoque.destroy()

        res.json({ message: "Registro de estoque removido com sucesso" })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
