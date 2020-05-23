import React, { Component } from 'react';
import axios from 'axios';

export default class CreateIncident extends Component {
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
			<div className="row">
				<div className="col-md-4">
          <div className="card card-body">
            <h3>Create New Incident</h3>
            <form>
              <div className="form-group">
                <input type="text" className="form-control my-3" placeholder="Title" />
                <textarea type="" className="form-control my-3" placeholder="Description to incident"></textarea>
                <input type="text" className="form-control my-3" placeholder="Author"/>
              </div>
            </form>
          </div>
        </div>
				<div className="col-md-8">
					<ul className="list-group">
						{this.state.incidents.map((incident) => (
							<li className="list-group-item list-group-item-action" key={incident._id}>{incident.title}</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
