const { Router } = require('express');
const router = Router();

const { buscarTodasComidas, criarComida, eliminarComida } = require('../controllers/cardapioCtrl');

router.route('/')
  .get(buscarTodasComidas)
  .post(criarComida)

router.route('/:id')
  .delete(eliminarComida)
  
module.exports = router;