import React from 'react';

const ListaIncidentes = (props) => {
	const { deletarIncidente, getId, listaIncidentes } = props;
	return (
		<div className="card-menu">
			{listaIncidentes.map((incidente) => (
				<div className="post post-incidente" key={incidente._id}>
					<div className="header_post">
						<img src={incidente.foto} alt="" />
					</div>
					<div className="body_post">
						<div className="post_content">
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
											<li className="editar" onClick={() => getId(incidente._id)}>Editar</li>
											<li className="deletar" onClick={() => deletarIncidente(incidente._id)}>Deletar</li>
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
