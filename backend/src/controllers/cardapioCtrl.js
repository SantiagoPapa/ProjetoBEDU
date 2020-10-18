const cardapioCtrl = {};

const Cardapio = require('../models/Cardapio');

cardapioCtrl.buscarCardapios = async (req, res) => {
  const cardapio = await Cardapio.find();
  res.json(cardapio);
};

cardapioCtrl.criarComida = async (req, res) => {
  const { comida, descricao, preco, foto} = req.body;
  const newCardapio = new Cardapio({
    comida,
    descricao,
    preco,
    foto
  });
  await newCardapio.save();
  res.send({ message: "Comida Criada com sucesso."})
};

cardapioCtrl.deletarComida = async (req, res) => {
  await Cardapio.deleteOne({ _id: req.params.id });
  res.send({ message: 'Delete Comida'})
}

module.exports = cardapioCtrl;