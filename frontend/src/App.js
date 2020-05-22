import React from 'react';
import { BrowserRouter as Router, Router } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation';
import IncidentsList from './components/IncidentsList';
import CreateIncident from './components/CreateIncident';
import CreateUser from './components/CreateUser';

function App() {
	return (
		<div>
			<Router>
				<Navigation/>	
			</Router>
		</div>
	);
}

export default App;
