const { Schema, model } = require('mongoose');

const cardapioSchema = new Schema(
  {
   comida: String,
   descricao: String,
   preco: Number, 
   foto: String
  }
);

module.exports = model('Cardapio', cardapioSchema);