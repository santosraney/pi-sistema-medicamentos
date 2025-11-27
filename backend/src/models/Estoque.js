const { DataTypes } = require("sequelize")
const db = require("../config/database")

const Estoque = db.define("Estoque", {
    quantidadeInicial: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantidadeAtual: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Estoque
