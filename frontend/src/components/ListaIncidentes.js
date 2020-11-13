import React from 'react';
import '../style/ListaIncidentes.css';

const ListaIncidentes = (props) => {
	const { deletarIncidente, getId, listaIncidentes } = props;
	return (
		<div className="card-incidente">
			{listaIncidentes.map((incidente) => (
				<div className="post-incidente" key={incidente._id}>
					<div className="imagem_incidente">
						<img src={incidente.foto} />
					</div>
					<div className="body_post">
						<div className="conteudo_incidente">
							<h1>{incidente.titulo}</h1>
							<p>{incidente.descricao}</p>
							<div className="container_infos">
								<div className="postedBy">
									<span>Criado Por:</span>
									<p>{incidente.nome}</p>
									<p>{incidente.telefone}</p>
								</div>
								<div className="container_tags">
									<div className="tags">
										<ul>
											<li className="editar" onClick={() => getId(incidente._id)}>
												Editar
											</li>
											<li className="deletar" onClick={() => deletarIncidente(incidente._id)}>
												Deletar
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ListaIncidentes;
