const Administracao = require('../models/Administracao')
const Medicamento = require('../models/Medicamento')


// =======================================
// CRIAR registro de administração
// =======================================
exports.create = async (req, res) => {
    try {
        const { medicamentoId } = req.body

        // Verifica se o medicamento existe
        const medicamento = await Medicamento.findByPk(medicamentoId)
        if (!medicamento) {
            return res.status(404).json({ error: "Medicamento não encontrado" })
        }

        // Cria o registro
        const novaAdm = await Administracao.create(req.body)

        res.status(201).json(novaAdm)

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// =======================================
// LISTAR todas as administrações
// =======================================
exports.list = async (req, res) => {
    try {
        const administracoes = await Administracao.findAll({
            include: { model: Medicamento }
        })

        res.json(administracoes)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// =======================================
// BUSCAR administração por ID
// =======================================
exports.get = async (req, res) => {
    try {
        const administracao = await Administracao.findByPk(req.params.id, {
            include: { model: Medicamento }
        })

        if (!administracao) {
            return res.status(404).json({ error: "Registro de administração não encontrado" })
        }

        res.json(administracao)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// =======================================
// ATUALIZAR administração
// =======================================
exports.update = async (req, res) => {
    try {
        const administracao = await Administracao.findByPk(req.params.id)

        if (!administracao) {
            return res.status(404).json({ error: "Registro não encontrado" })
        }

        await administracao.update(req.body)

        res.json(administracao)

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// =======================================
// REMOVER administração
// =======================================
exports.remove = async (req, res) => {
    try {
        const administracao = await Administracao.findByPk(req.params.id)

        if (!administracao) {
            return res.status(404).json({ error: "Registro não encontrado" })
        }

        await administracao.destroy()

        res.json({ message: "Registro de administração removido com sucesso" })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
