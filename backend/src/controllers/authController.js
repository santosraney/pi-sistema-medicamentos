const Administrador = require('../models/Administrador')
const { hashSenha, compararSenha, gerarToken } = require('../services/authService')

exports.register = async (req, res) => {
    try {
        const { nome, email, senha } = req.body
        const hashed = await hashSenha(senha)
        const admin = await Administrador.create({ nome, email, senha: hashed })
        res.status(201).json({ id: admin.id, nome: admin.nome, email: admin.email })
    } catch (err) { res.status(400).json({ error: err.message }) }
}

exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body
        const admin = await Administrador.findOne({ where: { email } })
        if (!admin) return res.status(401).json({ error: 'Credenciais inválidas' })
        const ok = await compararSenha(senha, admin.senha)
        if (!ok) return res.status(401).json({ error: 'Credenciais inválidas' })
        const token = gerarToken({ id: admin.id, email: admin.email })
        res.json({ token })
    } catch (err) { res.status(500).json({ error: err.message}) }
}