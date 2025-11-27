const { DataTypes } = require("sequelize")
const db = require("../config/database")

const SinalVital = db.define("SinalVital", {
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataHora: {
        type: DataTypes.DATE,
        allowNull: false
    },
    observacoes: DataTypes.TEXT
})

module.exports = SinalVital
