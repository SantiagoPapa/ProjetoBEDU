const { Router } = require('express');
const router = Router();

const { buscarCardapios, criarComida, deletarComida } = require('../controllers/cardapioCtrl');

router.route('/')
  .get(buscarCardapios)
  .post(criarComida)

router.route('/:id')
  .delete(deletarComida)
  
module.exports = router;