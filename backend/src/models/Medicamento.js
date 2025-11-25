const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Medicamento = db.define("Medicamento", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    medicoPrescritor: DataTypes.STRING,
    especialidade: DataTypes.STRING,
    quantidadeInicial: DataTypes.INTEGER,
    horariosPrescritos: DataTypes.STRING,
    instrucoesEspeciais: DataTypes.STRING,
    classificacao: DataTypes.STRING
});

module.exports = Medicamento;
