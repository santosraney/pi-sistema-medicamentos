// Importando o tipo de dados do Sequelize
const { DataTypes } = require("sequelize")

// Importando a conexão com o banco
const db = require("../config/database")

// Define o model "Administrador" no Sequelize
// Ele representa a tabela "Administradors" no banco (plural automático)
const Administrador = db.define("Administrador", {
     // Dados do administrador
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    senha: { type: DataTypes.STRING, allowNull: false }
})

// Exportando o model
module.exports = Administrador