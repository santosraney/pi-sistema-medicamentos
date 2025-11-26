const express = require('express');
const router = express.Router();
const controller = require('../controllers/idosoController');
const auth = require('../middleware/auth');

router.post('/', auth, controller.create);
router.get('/', auth, controller.list);
router.get('/:id', auth, controller.get);
router.put('/:id', auth, controller.update);
router.delete('/:id', auth, controller.remove);

module.exports = router;
