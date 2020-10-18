import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/IncidentesList.css';
import ListaIncidentes from './ListaIncidentes';
import FormIncidente from './FormIncidente';

const TarefasProblemas = () => {
	const [ listaIncidentes, setListaIncidentes ] = useState([]);
	const [ idIncidente, setIdIncidente ] = useState('');
	const urlApi = 'http://localhost:5000/api/incidentes/';

	const getListaIncidentes = async () => {
		const res = await axios.get(urlApi);
		setListaIncidentes(res.data);
		esconder();
	};

	const mostrar = () => {
		const formulario = document.getElementById("form-inc");
		formulario.classList.remove("esconder-form");
	}

	const esconder = () => {
		const formulario = document.getElementById("form-inc");
		formulario.classList.add("esconder-form");
	}

	const getId = (id) => {
		setIdIncidente(id);
		mostrar();
	};
	
	const deletarIncidente = async (id) => {
		await axios.delete(urlApi + id);
		getListaIncidentes();
	};

	useEffect(() => {
		getListaIncidentes();
	}, []);

	return (
		<div className="container">		
			<div className="cabecalho">
				<h1>Tarefas e Problemas</h1>
				<button onClick={() => mostrar()}>Criar Incidente</button>
			</div>
			<div className="esconder-form" id="form-inc">
				<FormIncidente idIncidente={idIncidente} setIdIncidente={setIdIncidente} getListaIncidentes={getListaIncidentes} />
			</div>
			<ListaIncidentes listaIncidentes={listaIncidentes} deletarIncidente={deletarIncidente} getId={getId}/>
		</div>
	);
};

export default TarefasProblemas;
