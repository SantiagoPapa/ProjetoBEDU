const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const usuarioSchema = new Schema(
	{
		nome: {
			type: String,
			required: true
		},
		sobrenome: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true
		},
		senha: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

// Encriptar a senha
usuarioSchema.methods.encryptPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
};

// Comparar a senha para acessar
usuarioSchema.methods.matchPassword = async function(password) {
	return await bcrypt.compare(password, this.password);
};

module.exports = model('Usuario', usuarioSchema);
