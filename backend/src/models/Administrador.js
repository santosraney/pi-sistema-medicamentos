const { DataTypes } = require("sequelize")
const db = require("../config/database")

const Administrador = db.define("Administrador", {
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    senha: { type: DataTypes>STRING, allowNull: false }
})


module.exports = Administrador