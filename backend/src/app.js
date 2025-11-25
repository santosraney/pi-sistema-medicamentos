// Importação dos pacotes

// Instância para o Express
// Configurar EXPRESS

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const db = require('./config/database')

db.authenticate()
    .then(() => console.log("Conectado ao banco!"))
    .catch(err => console.log("Erro ao conectar:", err))

app.get('/status', (req, res) => {
    res.json({ message: "API funcionando!" })
})

module.exports = app

// Gerar tabelas no MySQL
const models = require('./models/index')
db.sync({ alter: true })
    .then(() => console.log("Tabelas sincronizadas"))
    .catch(err => console.log(err))

// Confguração dos middlewares

// Importação das rotas

// Execução do servidor