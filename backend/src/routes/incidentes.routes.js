const { Router } = require('express');
const router = Router();

const {
	buscarTodosIncidentes,
	buscarIncidente,
	criarIncidente,
	atualizarIncidente,
	eliminarIncidente
} = require('../controllers/incidentesCtrl');

router.get('/', buscarTodosIncidentes)

// Novo incidente
router.post('/', criarIncidente);

// Editar incidente
router.get('/:id', buscarIncidente)
router.put('/:id', atualizarIncidente)

// Eliminar incicente
router.delete('/:id', eliminarIncidente);

module.exports = router;
