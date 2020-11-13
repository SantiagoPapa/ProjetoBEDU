import React, { Component } from 'react';
import axios from 'axios';
import '../style/Cardapio.css';

export default class Cardapio extends Component {
  state = {
    cardapio: []
  };

  async componentDidMount() {
		const res = await axios.get('http://localhost:5000/api/cardapio');
		this.setState({ cardapio: res.data });
	}

  render() {
    return(
      <div className="container">
      <h1>Cardápio</h1>
      <div className="card-menu">
      {this.state.cardapio.map((comida) => (
          <div className="post post-cardapio" key={comida._id}>
            <div className="header_post">
              <img src={comida.foto} alt="" />
            </div>
            <div className="body_post">
              <div className="post_content">
                <h1>{comida.comida}</h1>
                <p>{comida.descricao}</p>
                <div className="container_infos">
                  <div className="postedBy">
                    <span>preço</span>
                      R$ {comida.preco}
                  </div>
                  <div className="container_tags">
                    <span>Pedido</span>
                    <div className="tags">
                      <ul>
                        <li>Qts</li>
                        <li>Adicionar</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      ))}
      </div>
      </div>
    );
  }
}