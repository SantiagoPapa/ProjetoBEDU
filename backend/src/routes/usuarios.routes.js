const { Router } = require('express');
const router = Router();

const {
	buscarTodosUsuarios,
	buscarUsuario,
	criarUsuario,
	atualizarUsuario,
	eliminarUsuario
} = require('../controllers/usuariosCtrl');

// Buscar usuários
router.get('/', buscarTodosUsuarios)

// Novo usuário
router.post('/', criarUsuario);

// Editar usuário
router.get('/:id', buscarUsuario)
router.put('/:id', atualizarUsuario)

// Eliminar usuário
router.delete('/:id', eliminarUsuario);

module.exports = router;
