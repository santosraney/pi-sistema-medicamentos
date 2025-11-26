const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Administrador = require('../models/Administrador')
const SECRET = process.env.JWT_SECRET

exports.hashSenha = (plain) => bcrypt.hash(plain, 10)
exports.compararSenha = (plain, hash) => bcrypt.compare(plain, hash)

exports.gerarToken = (payload) => jwt.sign(payload, SECRET, { expiresIn: '8h' })
