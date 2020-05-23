import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import IncidentsList from './components/IncidentsList';
import CreateIncident from './components/CreateIncident';
import CreateUser from './components/CreateUser';

function App() {
	return (	
		<Router>
			<Navigation />

			<Route path="/" exact component={IncidentsList} />
			<Route path="/incident" component={CreateIncident} />
			<Route path="/user" component={CreateUser} />
			<Route path="/user/:id" component={CreateUser} />
		</Router>
	);
}

export default App;
