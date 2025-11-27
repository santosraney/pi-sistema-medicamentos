// Importa o model Doenca
const Doenca = require('../models/Doenca')

// Importa o model Idoso, pois uma doença pertence a um idoso
const Idoso = require('../models/Idoso')

// =======================================
// CRIAR doença
// =======================================
exports.create = async (req, res) => {
    try {
        const { idosoId } = req.body

        // Verifica se o idoso existe antes de cadastrar a doença
        const idoso = await Idoso.findByPk(idosoId)

        if (!idoso) {
            return res.status(404).json({ error: "Idoso não encontrado" })
        }

        // Cria a doença no banco
        const novaDoenca = await Doenca.create(req.body)

        res.status(201).json(novaDoenca)

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// =======================================
// LISTAR todas as doenças
// =======================================
exports.list = async (req, res) => {
    try {
        const doencas = await Doenca.findAll({
            include: { model: Idoso } // mostra os dados do idoso associado
        })

        res.json(doencas)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// =======================================
// BUSCAR doença por ID
// =======================================
exports.get = async (req, res) => {
    try {
        const doenca = await Doenca.findByPk(req.params.id, {
            include: { model: Idoso }
        })

        if (!doenca) {
            return res.status(404).json({ error: "Doença não encontrada" })
        }

        res.json(doenca)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// =======================================
// ATUALIZAR doença
// =======================================
exports.update = async (req, res) => {
    try {
        const doenca = await Doenca.findByPk(req.params.id)

        if (!doenca) {
            return res.status(404).json({ error: "Doença não encontrada" })
        }

        await doenca.update(req.body)

        res.json(doenca)

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// =======================================
// DELETAR doença
// =======================================
exports.remove = async (req, res) => {
    try {
        const doenca = await Doenca.findByPk(req.params.id)

        if (!doenca) {
            return res.status(404).json({ error: "Doença não encontrada" })
        }

        await doenca.destroy()

        res.json({ message: "Doença removida com sucesso" })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
