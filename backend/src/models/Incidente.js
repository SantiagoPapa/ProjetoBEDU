const { Schema, model } = require('mongoose');

const incidenteSchema = new Schema(
		{
			nome: String,
			telefone: Number,
			titulo: String,
			email: String,
			descricao: String,
			local: String,
			foto: String,
			ativo: Boolean,
		},
	{
		timestamps: true
	}
);

module.exports = model('Incidente', incidenteSchema);
