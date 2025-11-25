const { DataTypes } = require("sequelize")
const db = require("../config/database")

const Idoso = db.define("Idoso", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    contatosEmergencia: {   // <- escrito certo!
        type: DataTypes.STRING,
    }
})

module.exports = Idoso
