// Saber se o usuário está logado
const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) return res.status(401).json({ error: 'Token ausente'})
    const token = authHeader.split(' ')[1]
    try {
        const data = jwt.verify(token, SECRET)
        req.user = data
        next()
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido'})
    }
}
