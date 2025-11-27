// Importa o model Cuidador
const Cuidador = require('../models/Cuidador')

// =======================================
// CRIAR cuidador
// =======================================
exports.create = async (req, res) => {
    try {
        // req.body contém os dados enviados pelo cliente (JSON)
        const novo = await Cuidador.create(req.body)

        res.status(201).json(novo)

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// =======================================
// LISTAR todos os cuidadores
// =======================================
exports.list = async (req, res) => {
    try {
        const lista = await Cuidador.findAll()
        res.json(lista)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// =======================================
// BUSCAR cuidador por ID
// =======================================
exports.get = async (req, res) => {
    try {
        const cuidador = await Cuidador.findByPk(req.params.id)

        if (!cuidador) {
            return res.status(404).json({ error: "Cuidador não encontrado" })
        }

        res.json(cuidador)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// =======================================
// ATUALIZAR cuidador
// =======================================
exports.update = async (req, res) => {
    try {
        const cuidador = await Cuidador.findByPk(req.params.id)

        if (!cuidador) {
            return res.status(404).json({ error: "Cuidador não encontrado" })
        }

        // Atualiza com os novos dados enviados
        await cuidador.update(req.body)

        res.json(cuidador)

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// =======================================
// REMOVER cuidador
// =======================================
exports.remove = async (req, res) => {
    try {
        const cuidador = await Cuidador.findByPk(req.params.id)

        if (!cuidador) {
            return res.status(404).json({ error: "Cuidador não encontrado" })
        }

        await cuidador.destroy()

        res.json({ message: "Cuidador removido com sucesso" })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
