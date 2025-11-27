// Importa o model Admin
const Administrador = require('../models/Administrador')

// Importa funções do serviço de autenticação
const { hashSenha, compararSenha, gerarToken } = require('../services/authService')

// =========================
// REGISTRAR ADMIN
// =========================
// Essa rota serve para criar o primeiro admin do sistema.
// Depois você pode bloquear ou manter, dependendo da necessidade.
exports.register = async (req, res) => {
    try {
        const { nome, email, senha } = req.body

        // Criptografa a senha
        const senhaHash = await hashSenha(senha)

        // Cria o administrador no banco
        const admin = await Administrador.create({
            nome,
            email,
            senha: senhaHash
        })

        // Retorna sem a senha
        res.status(201).json({
            id: admin.id,
            nome: admin.nome,
            email: admin.email
        })

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// =========================
// LOGIN
// =========================
exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body

        // Procura admin pelo email
        const admin = await Administrador.findOne({ where: { email } })

        if (!admin) {
            return res.status(401).json({ error: "Credenciais inválidas" })
        }

        // Compara senha digitada com a senha do banco
        const senhaValida = await compararSenha(senha, admin.senha)

        if (!senhaValida) {
            return res.status(401).json({ error: "Credenciais inválidas" })
        }

        // Gera token JWT
        const token = gerarToken({
            id: admin.id,
            email: admin.email
        })

        // Retorna o token (o front guarda e passa no Authorization)
        res.json({ token })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
