import React from 'react';
import '../style/Login.css';

export default function Login() {

	


	return (
		<div className="container">
			<div className="container-login">
				<h1>Login</h1>
				<input type="text" name="email" id="email-login" placeholder="E-mail" />
				<input type="password" name="senha" id="senha-login" placeholder="Senha" />

				<input className="btn-enviar" type="submit" id="btn-login" value="Login" />
			</div>
		</div>
	);
}
