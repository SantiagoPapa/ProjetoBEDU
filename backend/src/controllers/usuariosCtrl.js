const usuariosCtrl = {};

const passport = require('passport');
const Usuario = require('../models/Usuario');

// |GET FOR FIND ALL USERS| \\
usuariosCtrl.buscarTodosUsuarios = async (req, res) => {
	const usuarios = await Usuario.find();
	res.json(usuarios);
};

// |GET FOR FIND USER BY ID| \\
usuariosCtrl.buscarUsuario = async (req, res) => {
	const usuarios = await Usuario.findOne({ _id: req.params.id });
	res.json(usuarios);
};

// |POST FOR CREATE NEW USER| \\
usuariosCtrl.criarUsuario = async (req, res) => {
	const { nome, sobrenome, email, senha } = req.body;
	const novoUsuario = new Usuario({
		nome,
		sobrenome,
		email,
		senha
	});
	novoUsuario.senha = await novoUsuario.encryptPassword(senha)
	await novoUsuario.save();
	res.send({ message: 'Usuário Criado.' });
};

// |PUT FOR UPDATE USER| \\
usuariosCtrl.atualizarUsuario = async (req, res) => {
	await Usuario.updateOne({ _id: req.params.id }, req.body);
	res.send({ message: 'Usuário atualizado' });
};

// |DELETE FOR DELETE USER| \\
usuariosCtrl.eliminarUsuario = async (req, res) => {
	await Usuario.deleteOne({ _id: req.params.id });
	res.send({ message: 'Usuário eliminado' });
};

// Authenticator
usuariosCtrl.login = passport.authenticate('local', {
	failureRedirect: '/login',
	successRedirect: '/incidentes'
})

module.exports = usuariosCtrl;
