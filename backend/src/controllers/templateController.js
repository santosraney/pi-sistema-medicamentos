// Exemplo: const Model = require('../models/Idoso');
exports.create = (Model) => async (req, res) => {
  try {
    const item = await Model.create(req.body);
    res.status(201).json(item);
  } catch (err) { res.status(400).json({ error: err.message }); }
};

exports.list = (Model) => async (req, res) => {
  try {
    const items = await Model.findAll();
    res.json(items);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.get = (Model) => async (req, res) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Não encontrado' });
    res.json(item);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.update = (Model) => async (req, res) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Não encontrado' });
    await item.update(req.body);
    res.json(item);
  } catch (err) { res.status(400).json({ error: err.message }); }
};

exports.remove = (Model) => async (req, res) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Não encontrado' });
    await item.destroy();
    res.json({ message: 'Removido' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};
