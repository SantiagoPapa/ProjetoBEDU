const { Router } = require('express');
const router = Router();

const { buscarTodosIncidentes, buscarIncidente, criarIncidente, atualizarIncidente, eliminarIncidente } = require('../controllers/incidentesCtrl');

router.route('/')
  .get(buscarTodosIncidentes)
  .post(criarIncidente)

router.route('/:id')
  .get(buscarIncidente)
  .put(atualizarIncidente)
  .delete(eliminarIncidente)

module.exports = router;