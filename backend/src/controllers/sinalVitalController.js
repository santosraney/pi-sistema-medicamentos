const SinalVital = require('../models/SinalVital')
const Idoso = require('../models/Idoso')

// =======================================
// CRIAR sinal vital
// =======================================
exports.create = async (req, res) => {
    try {
        const { idosoId } = req.body

        // Verifica se o idoso existe
        const idoso = await Idoso.findByPk(idosoId)
        if (!idoso) {
            return res.status(404).json({ error: "Idoso não encontrado" })
        }

        const novoSinal = await SinalVital.create(req.body)

        res.status(201).json(novoSinal)

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// =======================================
// LISTAR todos os sinais
// =======================================
exports.list = async (req, res) => {
    try {
        const sinais = await SinalVital.findAll({
            include: { model: Idoso }
        })

        res.json(sinais)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// =======================================
// BUSCAR sinal por ID
// =======================================
exports.get = async (req, res) => {
    try {
        const sinal = await SinalVital.findByPk(req.params.id, {
            include: { model: Idoso }
        })

        if (!sinal) {
            return res.status(404).json({ error: "Sinal vital não encontrado" })
        }

        res.json(sinal)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// =======================================
// ATUALIZAR sinal vital
// =======================================
exports.update = async (req, res) => {
    try {
        const sinal = await SinalVital.findByPk(req.params.id)

        if (!sinal) {
            return res.status(404).json({ error: "Sinal vital não encontrado" })
        }

        await sinal.update(req.body)

        res.json(sinal)

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// =======================================
// REMOVER sinal vital
// =======================================
exports.remove = async (req, res) => {
    try {
        const sinal = await SinalVital.findByPk(req.params.id)

        if (!sinal) {
            return res.status(404).json({ error: "Sinal vital não encontrado" })
        }

        await sinal.destroy()

        res.json({ message: "Sinal vital removido com sucesso" })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
