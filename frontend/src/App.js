import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import Inicio from './components/Inicio';
import Promocoes from './components/Promocoes';
import Cardapio from './components/Cardapio';
import Passeios from './components/Passeios';
import Informacoes from './components/Informacoes';
import CriarIncidente from './components/CriarIncidente';

function App() {
	return (
		<Router>
			<Navigation />
			<div className="container">
				<Route path="/" exact component={Inicio} />
				<Route path="/promocoes" component={Promocoes} />
				<Route path="/cardapio" component={Cardapio} />
				<Route path="/passeios" component={Passeios} />
				<Route path="/info" component={Informacoes} />
				<Route path="/incidentes" component={CriarIncidente} />
			</div>
		</Router>
	);
}

export default App;
