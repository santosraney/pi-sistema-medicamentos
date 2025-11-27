// Middleware que protege as rotas usando JWT
const jwt = require('jsonwebtoken')

// Chave secreta usada para validar o token
const SECRET = process.env.JWT_SECRET

module.exports = (req, res, next) => {

    // Verifica se veio o header Authorization
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ error: "Token ausente" })
    }

    // Authorization vem no formato:
    // Bearer asjdi2312j3dkasjkd...
    const token = authHeader.split(" ")[1]

    try {
        // Verifica token
        const decoded = jwt.verify(token, SECRET)

        // Coloca os dados do token dentro da requisição
        req.user = decoded

        // Continua para o controller
        next()

    } catch (err) {
        return res.status(401).json({ error: "Token inválido" })
    }
}
