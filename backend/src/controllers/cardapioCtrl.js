const cardapioCtrl = {};

const Cardapio = require('../models/Cardapio');

cardapioCtrl.buscarTodasComidas = async (req, res) => {
  const cardapio = await Cardapio.find();
  res.json(cardapio);
};

cardapioCtrl.criarComida = async (req, res) => {
  const { comida, descricao, preco, foto} = req.body;
  const novaComida = new Cardapio({
    comida,
    descricao,
    preco,
    foto
  });
  await novaComida.save();
  res.send({ message: "Comida criada com sucesso."})
};

cardapioCtrl.eliminarComida = async (req, res) => {
  await Cardapio.deleteOne({ _id: req.params.id });
  res.send({ message: 'Comida eliminada'})
}

module.exports = cardapioCtrl;