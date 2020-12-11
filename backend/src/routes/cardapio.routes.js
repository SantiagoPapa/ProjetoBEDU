const { Router } = require('express');
const router = Router();

const { buscarTodasComidas, criarComida, eliminarComida } = require('../controllers/cardapioCtrl');

router.get('/', buscarTodasComidas);

router.post('/', criarComida);

router.delete('/:id', eliminarComida);

module.exports = router;
