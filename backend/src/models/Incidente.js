const { Schema, model } = require('mongoose');

const incidenteSchema = new Schema(
	{
		autor: String,
		telefone: Number,
		titulo: {
			type: String,
			required: true
		},
		email: String,
		descricao: {
			type: String,
			required: true
		},
		referencia: String,
		foto_url: String
	},
	{
		timestamps: true
	}
);

module.exports = model('Incidente', incidenteSchema);
