const incidentesCtrl = {};

const Incidente = require('../models/Incidente');

// |GET FOR FIND ALL INCIDENTS| \\
incidentesCtrl.buscarTodosIncidentes = async (req, res) => {
	const incidentes = await Incidente.find();
	res.json(incidentes);
};

// |GET FOR FIND INCIDENT BY ID| \\
incidentesCtrl.buscarIncidente = async (req, res) => {
	const incidente = await Incidente.findOne({ _id: req.params.id });
	res.json(incidente);
};

// |POST FOR CREATE NEW INCIDENT| \\
incidentesCtrl.criarIncidente = async (req, res) => {
	const { nome, telefone, titulo, email, descricao, local, foto, ativo } = req.body;
	const novoIncidente = new Incidente({
		nome,
		telefone,
		titulo,
		email,
		descricao,
		local,
		foto,
		ativo
	});
	await novoIncidente.save();
	res.send({ mensagem: 'Incidente criado com sucesso.' });
	console.log(req.body);
};

// |PUT FOR UPDATE INCIDENT| \\
incidentesCtrl.atualizarIncidente = async (req, res) => {
	await Incidente.updateOne({ _id: req.params.id }, req.body);
	res.send({ mensagem: 'Incidente atualizado com sucesso! Obrigado pelo seu trabalho.' });
};

// |DELETE FOR DELETE INCIDENT| \\
incidentesCtrl.eliminarIncidente = async (req, res) => {
	await Incidente.deleteOne({ _id: req.params.id });
	res.send({
		mensagem: 'Incidente eliminado com sucesso. OBS: O Incidente ficará registrado no backup para maior controle.'
	});
};

module.exports = incidentesCtrl;
