const { Router } = require('express');
const router = Router();

const { buscarTodosUsuarios, buscarUsuario, criarUsuario, atualizarUsuario, eliminarUsuario } = require('../controllers/usuariosCtrl');

router.route('/')
  .get(buscarTodosUsuarios)
  .post(criarUsuario)

router.route('/:id')
  .get(buscarUsuario)
  .put(atualizarUsuario)
  .delete(eliminarUsuario)

module.exports = router;