import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/App.css';
import 'react-toastify/dist/ReactToastify.css';

import MenuNavegacao from './components/MenuNavegacao';
// import Login from './components/Login';
// import Inicio from './components/Inicio';
import Promocoes from './components/Promocoes';
import Cardapio from './components/Cardapio';
import Passeios from './components/Passeios';
import Informacoes from './components/Informacoes';
import FormIncidente from './components/FormIncidente';
import Footer from './components/Footer';
import TarefasProblemas from './components/TarefasProblemas';

export default function App() {
	return (
		<Router>
			<div className="app">
				<MenuNavegacao titulo="Promocao" />
				{/* <Route path="/login" component={Login} /> */}
				<Route path="/incidentes" exact component={TarefasProblemas} />
				<Route path="/formincidente" component={FormIncidente} />
				{/* <Route path="/formincidente/:id" component={FormIncidente} /> */}
				<Route path="/promocoes" component={Promocoes} />
				<Route path="/cardapio" component={Cardapio} />
				<Route path="/passeios" component={Passeios} />
				<Route path="/info" component={Informacoes} />
				<Footer />
			</div>
		</Router>
	);
}	