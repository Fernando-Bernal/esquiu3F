import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { getGoal30 } from "../redux/actions";

function Goleadores30() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.goles30);
	const [tabla, setTabla] = useState([]);

	useEffect(() => {
		dispatch(getGoal30());
	}, []);

	useEffect(() => {
		setTabla(data);
	}, [data]);

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

export default Goleadores30;

const DivBackground = styled.div`
	position: relative;
	height: 100vh;
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
`;

const Td = styled.td`
	font-size: 0.7rem;
	text-align: center;
	vertical-align: middle;
`;
