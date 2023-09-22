import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import teamDef from "../assets/img/team_photo.png";
import logoDef from "../assets/img/ph_team5.png";
import x from "../assets/img/padel2.jpg";

function Users() {
	let usuario = {};

	return (
		<Container>
			<Header />
			<DivContainer>
				<H4>EDITA INFORMACIÓN DEL EQUIPO</H4>
			</DivContainer>
			<EscudoFoto>
				<Contenedor>
					<Img src={usuario.escudo ? usuario.escudo : logoDef} alt="" />
					<Span>EDITA ESCUDO</Span>
				</Contenedor>
				<Contenedor>
					<Img src={usuario.foto ? usuario.foto : teamDef} alt="" />
					<Span>EDITA FOTO</Span>
				</Contenedor>
			</EscudoFoto>
			<DivBtn>
				<BtnNewPlayer>Añade jugador</BtnNewPlayer>
			</DivBtn>
			<div>
				<table className="table table-striped">
					<thead>
						<tr>
							<th id="th">Foto</th>
							<th id="th">Nombre</th>
							<th id="th">DNI</th>
							<th id="th">Opciones</th>
						</tr>
					</thead>
					<tbody>
						
								<tr >
									<td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div>
                                            <button>Editar</button>
                                        </div>
                                    </td>
								</tr>
						
					</tbody>
				</table>
			</div>
			<Footer />
		</Container>
	);
}

export default Users;

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: -2;
`;

const DivContainer = styled.div`
	position: relative;
	z-index: -3;
	background-color: #0d390b;
	border-top: 5px solid #174f14;
	border-bottom: 5px solid #285a26;
	/* background-color: #d08c1e;
	border-top: 5px solid #ffbc5076;
	border-bottom: 5px solid #a16709; */
	width: 100%;
	height: 45px;
`;

const H4 = styled.h4`
	font-size: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 6px;
	color: beige;
`;
const EscudoFoto = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 20px 0;
`;

const Contenedor = styled.div`
	border-radius: 5px;
	height: 120px;
	width: 120px;
	display: flex;
	flex-direction: column;
`;

const Img = styled.img`
	min-height: 100px;
	width: inherit;
	border-radius: 5px;
`;

const Span = styled.span`
	margin-top: 5px;
	border: 1px solid green;
	background-color: #0d390b;
	color: beige;
	font-weight: 4 00;
`;

const DivBtn = styled.div`
	display: flex;
	justify-content: center;
`;

const BtnNewPlayer = styled.button`
	height: 30px;
	width: auto;
	background-color: #d08c1e;
	color: whitesmoke;
	margin: 20px;
`;
