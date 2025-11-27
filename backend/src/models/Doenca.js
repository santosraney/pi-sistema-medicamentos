const { DataTypes } = require("sequelize")
const db = require("../config/database")

const Doenca = db.define("Doenca", {
    nome: DataTypes.STRING,
    dataDiagnostico: DataTypes.DATE,
    medicoResponsavel: DataTypes.STRING,
    especialidade: DataTypes.STRING,
    observacoes: DataTypes.TEXT,
    evolucao: DataTypes.TEXT
});

module.exports = Doenca
