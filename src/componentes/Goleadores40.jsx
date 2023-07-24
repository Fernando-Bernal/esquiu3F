import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { getGoal40 } from "../redux/actions";

function Goleadores40() {
	const dispatch = useDispatch();
	const goles40 = useSelector((state) => state.reducer40.goles40);
	const [tabla, setTabla] = useState([]);

	useEffect(() => {
		if (goles40?.length === 0) {
			dispatch(getGoal40());
		}
	}, []);

	useEffect(() => {
		setTabla(goles40);
	}, [goles40]);
	return (
		<>
			<DivBackground>
				<DivTitulo>GOLEADORES</DivTitulo>
				<DivTabla>
					<table className="table table-striped">
						<thead>
							<tr>
								<th id="th">Nombre</th>
								<th id="th">Equipo</th>
								<th id="th">Goles</th>
							</tr>
						</thead>
						<tbody>
							{tabla.map((e) => {
								return (
									<tr key={e.orden}>
										<Td>{e.nombre}</Td>
										<Td>{e.equipo}</Td>
										<Td>{e.goles}</Td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</DivTabla>
			</DivBackground>
		</>
	);
}

export default Goleadores40;

const DivBackground = styled.div`
	position: relative;
	height: 90vh;
	width: 100%;
	top: -80px;
	z-index: -5;
`;

const DivTitulo = styled.h2`
	position: relative;
	top: 110px;
	text-align: center;
	font-size: 1.5rem;
	font-weight: bold;
	color: #ccd0d4;
`;

const DivTabla = styled.div`
	width: 85%;
	height: 70vh;
	position: relative;
	margin: auto;
	border-radius: 10px;
	background-color: #f8f9fa;
	box-shadow: 0 0 10px #ccb367;
	top: 120px;
	margin-bottom: 20px;
	overflow: auto;

	@media (min-width: 768px) {
		width: 40%;
		::-webkit-scrollbar {
			width: 10px;
			background-color: #ccb367;
		}
	}
`;

const Td = styled.td`
	font-size: 0.7rem;
	text-align: center;
	vertical-align: middle;

	@media (min-width: 768px) {
		font-size: 1rem;
	}
`;
