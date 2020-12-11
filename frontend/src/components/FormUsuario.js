import React, { useState } from 'react';
import axios from 'axios';
import '../style/FormUsuario.css';

const FormUsuario = () => {
	// STATE INICIAL
	const [ usuario, setUsuario ] = useState([]);
	const urlApi = 'http://localhost:5000/api/usuarios/';
	const valorInicial = {
		nome: '',
		sobrenome: '',
		email: '',
		senha: ''
	};

	//COLETAR INFORMAÇÕES DOS INPUTs
	const onInputChange = (data) => {
		const { name, value } = data.target;
		setUsuario({ ...usuario, [name]: value });
	};

	const enviarForm = async (e) => {
		e.preventDefault();
		await axios.post(urlApi, usuario);
		setUsuario(valorInicial);
	};

	return (
		<div className="container">
			<div className="container-registrar">
				<h3>Registrar novo usuário</h3>
				<form className="form-group">
					<label htmlFor="usuario-form-nome">Nome</label>
					<input
						id="usuario-form-nome"
						type="text"
						name="nome"
						placeholder="Nome"
						onChange={onInputChange}
						value={usuario.nome}
					/>
					<label htmlFor="usuario-form-sobrenome">Sobrenome</label>
					<input
						id="usuario-form-sobrenome"
						type="text"
						name="sobrenome"
						placeholder="Sobrenome"
						onChange={onInputChange}
						value={usuario.sobrenome}
					/>
					<label htmlFor="usuario-form-email">E-mail</label>
					<input
						id="usuario-form-email"
						type="email"
						name="email"
						placeholder="E-mail"
						onChange={onInputChange}
						value={usuario.email}
					/>
					<label htmlFor="usuario-form-senha">Senha</label>
					<input
						id="usuario-form-senha"
						type="password"
						name="senha"
						placeholder="Senha"
						onChange={onInputChange}
						value={usuario.senha}
						/>
					<label htmlFor="usuario-form-confirma-senha">Confirmar senha</label>
					<input
						id="usuario-form-confirma-senha"
						type="password"
						name="confirma-senha"
						placeholder="Confirmar senha"
						onChange={onInputChange}
						value={usuario.senha}
					/>
				</form>
					<button type="button" className="btn-eviar" onClick={enviarForm}>
						Registrar
					</button>
			</div>
		</div>
	);
};

export default FormUsuario;
