const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
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
  },
  administrador: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('Usuario', usuarioSchema);
