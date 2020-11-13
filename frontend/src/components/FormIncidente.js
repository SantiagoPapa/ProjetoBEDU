import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/FormIncidente.css';

const FormIncidente = (props) => {
	const { idIncidente, setIdIncidente, getListaIncidentes } = props;

	//STATE INICIAL
	const [ incidente, setIncidente ] = useState([]);
	const urlApi = 'http://localhost:5000/api/incidentes/';

	const valorStateInicial = {
		nome: '',
		telefone: 0,
		titulo: '',
		email: '',
		descricao: '',
		local: '',
		foto: '',
		ativo: true
	};

	useEffect(
		() => {
			if (!idIncidente) {
				setIncidente(valorStateInicial);
			} else {
				getIncidente(idIncidente);
			}
		},
		[ idIncidente ]
	);

	const getIncidente = async (id) => {
		const res = await axios.get(urlApi + id);
		setIncidente(res.data);
	};

	//COLETAR INFORMACOES DOS INPUTs
	const onInputChange = (data) => {
		const { name, value } = data.target;
		setIncidente({ ...incidente, [name]: value });
		console.log(incidente.ativo);
	};

	//SUBMIT INCIDENTE
	const enviarForm = async (e) => {
		e.preventDefault();
		if (idIncidente) {
			await axios.put(urlApi + props.idIncidente, incidente);
			setIdIncidente('');
		} else {
			await axios.post(urlApi, incidente);
		}
		setIncidente(valorStateInicial);
		getListaIncidentes();
	};

	//CANCELAR
	const cancelarForm = () => {
		setIncidente(valorStateInicial);
		setIdIncidente('');
		getListaIncidentes();
	};

	const fecharIncidente = () => {
	}

	return (
		<div className="container-form-incidente">
			<h3>{idIncidente === '' ? 'Criar incidente' : 'Atualizar Incidente'}</h3>
			<form className="form">
				<div className="form-group">
					<div className="group-input">
						<label htmlFor="form-nome">Nome Completo:</label>
						<input
							id="form-nome"
							type="text"
							name="nome"
							placeholder="Nome completo"
							value={incidente.nome}
							onChange={onInputChange}
						/>
					</div>
					<div className="group-input">
						<label htmlFor="form-telefone">Telefone:</label>
						<input
							id="form-telefone"
							type="number"
							name="telefone"
							placeholder="Telefone"
							value={incidente.telefone}
							onChange={onInputChange}
						/>
					</div>
					<div className="group-input">
						<label htmlFor="form-email">E-mail:</label>
						<input
							id="form-email"
							type="e-mail"
							name="email"
							placeholder="E-mail"
							value={incidente.email}
							onChange={onInputChange}
						/>
					</div>
					<div className="group-input">
						<label htmlFor="form-titulo">Título:</label>
						<input
							id="form-titulo"
							type="text"
							name="titulo"
							placeholder="Titulo"
							value={incidente.titulo}
							onChange={onInputChange}
						/>
					</div>
					<div className="group-input">
						<label htmlFor="form-descricao">Descrição:</label>
						<textarea
							id="form-descricao"
							type="text"
							name="descricao"
							placeholder="Descrição do incidente"
							value={incidente.descricao}
							onChange={onInputChange}
						/>
					</div>
					<div className="group-input">
						<label htmlFor="form-local">Local do incidente:</label>
						<input
							id="form-local"
							type="text"
							name="local"
							placeholder="Local do incidente"
							value={incidente.local}
							onChange={onInputChange}
						/>
					</div>
					<div className="group-input">
						<label htmlFor="form-foto">Foto do Incidente:</label>
						<input
							id="form-foto"
							type="text"
							name="foto"
							placeholder="Foto do incidente"
							value={incidente.foto}
							onChange={onInputChange}
						/>
					</div>
				</div>
				<div className="container-btn">
					<button type="button" className="btn-enviar" onClick={enviarForm}>
						{idIncidente === '' ? 'Criar Incidente' : 'Atualizar'}
					</button>
					<button type="button" className="btn-cancelar" onClick={cancelarForm}>
						Cancelar
					</button>
					<button type="button" className="btn-fechar" onClick={fecharIncidente}>
						Fechar Incidente
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormIncidente;
