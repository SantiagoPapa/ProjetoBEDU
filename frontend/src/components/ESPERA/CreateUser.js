import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
	state = {
		users: [],
		firstname:''
	};

	async componentDidMount() {
		const res = await axios.get('http://localhost:5000/api/users');
		this.setState({ users: res.data });
		console.log(this.state.users);
	};

	onChangeUsername = (e) => {
		this.setState({
			firstname: e.target.value
		});
		console.log(this.state.firstname)
	};

	onSubmit = e => {
		axios.post('http:localhost:5000/api/users', )
		e.preventDefault();
	};

	render() {
		return (
			<div className="container">
				<div className="col-md-4">
          <div className="card card-body">
            <h3>Create New User</h3>
            <form >
              <div className="form-group">
                <input type="text" className="form-control my-3" placeholder="Firstname" onChange={this.onChangeUsername} />
                <input type="text" className="form-control my-3" placeholder="Lastname"/>
                <input type="email" className="form-control my-3" placeholder="E-mail"/>
              </div>
							<button type="submit" className="btn btn-primary">
								Save
							</button>
            </form>
          </div>
        </div>
				<div className="col-md-8">
					<ul className="list-group">
						{this.state.users.map((user) => (
							<li className="list-group-item list-group-item-action" key={user._id}>{user.username}</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}