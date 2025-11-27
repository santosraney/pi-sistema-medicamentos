// Importa o model Idoso
const Idoso = require('../models/Idoso')

// =============================
// CRIAR um idoso
// =============================
exports.create = async (req, res) => {
    try {
        // req.body contém os dados vindos do cliente (JSON)
        const novoIdoso = await Idoso.create(req.body)

        // Retorna o idoso criado
        res.status(201).json(novoIdoso)

    } catch (err) {
        // Caso ocorra erro (ex: campo obrigatório faltando)
        res.status(400).json({ error: err.message })
    }
}

// =============================
// LISTAR todos os idosos
// =============================
exports.list = async (req, res) => {
    try {
        const idosos = await Idoso.findAll()
        res.json(idosos)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// =============================
// BUSCAR idoso por ID
// =============================
exports.get = async (req, res) => {
    try {
        // req.params.id vem da URL (ex: /idosos/5)
        const idoso = await Idoso.findByPk(req.params.id)

        if (!idoso) {
            return res.status(404).json({ error: "Idoso não encontrado" })
        }

        res.json(idoso)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// =============================
// ATUALIZAR idoso por ID
// =============================
exports.update = async (req, res) => {
    try {
        const idoso = await Idoso.findByPk(req.params.id)

        if (!idoso) {
            return res.status(404).json({ error: "Idoso não encontrado" })
        }

        // Atualiza usando os dados enviados pelo cliente
        await idoso.update(req.body)

        res.json(idoso)

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// =============================
// DELETAR idoso por ID
// =============================
exports.remove = async (req, res) => {
    try {
        const idoso = await Idoso.findByPk(req.params.id)

        if (!idoso) {
            return res.status(404).json({ error: "Idoso não encontrado" })
        }

        await idoso.destroy()

        res.json({ message: "Idoso removido com sucesso" })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
