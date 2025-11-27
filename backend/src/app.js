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



// Registrando rotas de doença no app.js
const doencaRoutes = require('./routes/doencaRoutes')
app.use('/doencas', doencaRoutes)

// Registrando rotas de cuidador no app.js
const cuidadorRoutes = require('./routes/cuidadorRoutes')
app.use('/cuidadores', cuidadorRoutes)

// Registrando rotas do auth no app.js
const authRoutes = require('./routes/authRoutes')
app.use('/auth', authRoutes)

// Registrando rotas do Idoso no app.js
const idosoRoutes = require('./routes/idosoRoutes')
app.use('/idosos', idosoRoutes)

const eventoAdversoRoutes = require('./routes/eventoAdversoRoutes')
app.use('/eventos-adversos', eventoAdversoRoutes)

const sinalVitalRoutes = require('./routes/sinalVitalRoutes')
app.use('/sinais-vitais', sinalVitalRoutes)

const estoqueRoutes = require('./routes/estoqueRoutes')
app.use('/estoques', estoqueRoutes)

const administracaoRoutes = require('./routes/administracaoRoutes')
app.use('/administracoes', administracaoRoutes)

const medicamentoRoutes = require('./routes/medicamentoRoutes')
app.use('/medicamentos', medicamentoRoutes) 
