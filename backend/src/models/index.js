const Idoso = require("./Idoso");
const Doenca = require("./Doenca");
const Medicamento = require("./Medicamento");
const Administracao = require("./Administracao");
const Estoque = require("./Estoque");
const EventoAdverso = require("./EventoAdverso");
const SinalVital = require("./SinalVital");
const Cuidador = require("./Cuidador");


// Exemplo de relacionamentos:
Idoso.hasMany(Doenca);
Doenca.belongsTo(Idoso);

Idoso.hasMany(Medicamento);
Medicamento.belongsTo(Idoso);

Medicamento.hasOne(Estoque);
Estoque.belongsTo(Medicamento);

Medicamento.hasMany(Administracao);
Administracao.belongsTo(Medicamento);

Idoso.hasMany(SinalVital);
SinalVital.belongsTo(Idoso);

Idoso.hasMany(EventoAdverso);
EventoAdverso.belongsTo(Idoso);

module.exports = {
  Idoso, Doenca, Medicamento, Administracao,
  Estoque, EventoAdverso, SinalVital, Cuidador
};
