import React from 'react';
import '../style/Cardapio.css'

const Card = props => {
  return ( 
    <div>  
      <h1>INCIDENTE</h1>
      <div className="booking-card">
        <div className="book-container">
          <div className="content">
            <button className="btn">Mais Detalhes</button>
          </div>
        </div>
        <div className="informations-container">
          <h2 className="title">{props.titulo}</h2>
          <p className="price">De 0 à 15 €</p>
          <div className="more-information">
            <div className="info-and-date-container">
              <div className="box date">
                <p>Samedi 1er février 2020</p>
              </div>
            </div>
            <p className="disclaimer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio</p>
            </div>
        </div>
      </div>  
    </div>
  )
}
 
export default Card;