import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
	render() {
		return (
			<aside className="sidebar">
				<nav className="nav">
					<ul>
						<li className="active">
							<Link to="/">Inicio</Link>
						</li>
						<li>
							<Link to="/promocoes">Promoções</Link>
						</li>
						<li>
							<Link to="/cardapio">Cardápio</Link>
						</li>
						<li>
							<Link to="/passeios">Passeios</Link>
						</li>
						<li>
							<Link to="/info">Informação Geral</Link>
						</li>
						<li>
							<Link to="/incidentes">Criar Incidentes</Link>
						</li>
					</ul>
				</nav>
			</aside>
		);
	}
}
