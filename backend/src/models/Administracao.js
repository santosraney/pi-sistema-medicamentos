const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Administracao = db.define("Administracao", {
    horarioAdministrado: {
        type: DataTypes.DATE,
        allowNull: false
    },
    observacoes: DataTypes.TEXT,
    tipo: DataTypes.STRING  // correto, fora do horário, antibiótico atrasado etc.
});

module.exports = Administracao;
