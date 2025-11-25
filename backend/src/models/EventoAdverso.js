const { DataTypes } = require("sequelize");
const db = require("../config/database");

const EventoAdverso = db.define("EventoAdverso", {
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataHora: {
        type: DataTypes.DATE,
        allowNull: false
    },
    descricao: DataTypes.TEXT,
    local: DataTypes.STRING
});

module.exports = EventoAdverso;
