import React from 'react';
import LinkMenu from './LinkMenu';
import '../style/MenuNavegacao.css';

export default function MenuNavegacao (props) {
	
	return (
	<div className="menu">
		<h2>FIXotel</h2>
		<nav className="nav-menu">
			<ul className="menu-lista">
				<LinkMenu titulo="Tarefas e Problemas" src="/incidentes" />
				<LinkMenu titulo="Promoções" src="/promocoes" />
				<LinkMenu titulo="Passeios" src="/passeios" />
				<LinkMenu titulo="Cardápio" src="/cardapio" />
				<LinkMenu titulo="Informações Gerais" src="/info" />
				<LinkMenu titulo="Sair" src="/sair" />
			</ul>
		</nav>
	</div>
	);
}