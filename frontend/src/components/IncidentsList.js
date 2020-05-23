import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class IncidentsList extends Component {
	state = {
		incidents: []
	};

	async componentDidMount() {
		const res = await axios.get('http://localhost:5000/api/incidents');
		this.setState({ incidents: res.data });
		console.log(this.state.incidents);
	}
	render() {
		return (
			<div className="row m-4 ">
				{this.state.incidents.map((incident) => (
					<div className="col-md-6">
						<div className="card text-center m-2" key={incident._id}>
							<div className="card-header">INCIDENTE - {incident._id} </div>
							<div className="card-body">
								<h5 className="card-title"> {incident.title} </h5>
								<p className="card-text">{incident.description}</p>
								<Link to="/" className="btn btn-primary">
									Details
								</Link>
							</div>
							<div className="card-footer text-muted">Created by - {incident.author} </div>
						</div>
					</div>
				))}
			</div>
		);
	}
}
