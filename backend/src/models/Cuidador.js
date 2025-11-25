const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Cuidador = db.define("Cuidador", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: DataTypes.STRING,
    whatsapp: DataTypes.STRING,
    cancelamentos: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

module.exports = Cuidador;
