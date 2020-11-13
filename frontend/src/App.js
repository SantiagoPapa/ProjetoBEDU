import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/App.css';
// import 'react-toastify/dist/ReactToastify.css';

// import Login from './components/Login';
import MenuNavegacao from './components/MenuNavegacao';
import TarefasProblemas from './components/TarefasProblemas';
// import Promocoes from './components/Promocoes';
// import Cardapio from './components/Cardapio';
// import Passeios from './components/Passeios';
// import Informacoes from './components/Informacoes';
import Footer from './components/Footer';

export default function App() {
	return (
		<Router>
			<div className="app">
				<MenuNavegacao />
				{/* <Route path="/" exact	component={Login} /> */}
				<Route path="/incidentes" component={TarefasProblemas} />
				{/* <Route path="/promocoes" component={Promocoes} /> */}
				{/* <Route path="/cardapio" component={Cardapio} /> */}
				{/* <Route path="/passeios" component={Passeios} /> */}
				{/* <Route path="/info" component={Informacoes} /> */}

				<Footer />
			</div>
		</Router>
	);
}
