const EventoAdverso = require('../models/EventoAdverso')
const Idoso = require('../models/Idoso')

// =======================================
// CRIAR evento adverso
// =======================================
exports.create = async (req, res) => {
    try {
        const { idosoId } = req.body

        // Garante que o idoso existe
        const idoso = await Idoso.findByPk(idosoId)
        if (!idoso) {
            return res.status(404).json({ error: "Idoso não encontrado" })
        }

        const novoEvento = await EventoAdverso.create(req.body)

        res.status(201).json(novoEvento)

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// =======================================
// LISTAR todos os eventos adversos
// =======================================
exports.list = async (req, res) => {
    try {
        const eventos = await EventoAdverso.findAll({
            include: { model: Idoso }
        })

        res.json(eventos)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// =======================================
// BUSCAR evento adverso por ID
// =======================================
exports.get = async (req, res) => {
    try {
        const evento = await EventoAdverso.findByPk(req.params.id, {
            include: { model: Idoso }
        })

        if (!evento) {
            return res.status(404).json({ error: "Evento não encontrado" })
        }

        res.json(evento)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// =======================================
// ATUALIZAR evento adverso
// =======================================
exports.update = async (req, res) => {
    try {
        const evento = await EventoAdverso.findByPk(req.params.id)

        if (!evento) {
            return res.status(404).json({ error: "Evento não encontrado" })
        }

        await evento.update(req.body)

        res.json(evento)

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// =======================================
// REMOVER evento adverso
// =======================================
exports.remove = async (req, res) => {
    try {
        const evento = await EventoAdverso.findByPk(req.params.id)

        if (!evento) {
            return res.status(404).json({ error: "Evento não encontrado" })
        }

        await evento.destroy()

        res.json({ message: "Evento adverso removido com sucesso" })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
