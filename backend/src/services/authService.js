// Biblioteca para criptografar senhas
const bcrypt = require('bcrypt')

// Biblioteca para criar tokens JWT
const jwt = require('jsonwebtoken')

// Importa o model Administrador
const Administrador = require('../models/Administrador')

// Puxa a chave secreta do .env
const SECRET = process.env.JWT_SECRET


// Função que recebe uma senha comum e devolve ela criptografada
exports.hashSenha = (senhaPlana) => {
    return bcrypt.hash(senhaPlana, 10) // 10 = custo da criptografia
}


// Função que compara senha digitada com senha criptografada do banco
exports.compararSenha = (senhaPlana, senhaCriptografada) => {
    return bcrypt.compare(senhaPlana, senhaCriptografada)
}


// Cria um token JWT válido por 8 horas
exports.gerarToken = (payload) => {
    return jwt.sign(payload, SECRET, { expiresIn: '8h' })
}
