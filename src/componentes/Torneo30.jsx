import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTorneo30 } from "../redux/actions";
import styled from "styled-components";

function Torneo30() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.torneo30);
	const [tabla, setTabla] = useState([]);

	useEffect(() => {
		dispatch(getTorneo30());
	}, []);
console.log(data)
	useEffect(() => {
		setTabla(data);
	}, [data]);
	return (
		<DivContainer>
			<DivTitulo>POSICIONES</DivTitulo>
			<DivTabla>
				<table className="table table-sm table-bordered">
					<thead>
						<tr>
							<th>Equipo</th>
							<th>P</th>
							<th>PJ</th>
							<th>PG</th>
							<th>PE</th>
							<th>PP</th>
							<th>GF</th>
							<th>GE</th>
							<th>GD</th>
						</tr>
					</thead>
					<tbody>
						{tabla.map((e) => {
							return (
								<tr key={e.id}>
									<Td>{e.equipo}</Td>
									<Td>{e.puntos}</Td>
									<Td>{e.partidos_jugados}</Td>
									<Td>{e.partidos_ganados}</Td>
									<Td>{e.partidos_empatados}</Td>
									<Td>{e.partidos_perdidos}</Td>
									<Td>{e.a_favor}</Td>
									<Td>{e.en_contra}</Td>
									<Td>{e.diferencia}</Td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</DivTabla>
		</DivContainer>
	);
}

export default Torneo30;

const DivContainer = styled.div`
	position: relative;
	z-index: -5;
`;

const DivTitulo = styled.h2`
	position: relative;
	margin: 10px auto;
	text-align: center;
	font-size: 1.5rem;
	font-weight: bold;
	color: #dbdee1;
`;

const DivTabla = styled.div`
	width: 85%;
	height: auto;
	position: relative;
	margin: auto;
	border-radius: 10px;
	background-color: #f8f9fa;
	box-shadow: 0 0 10px #ccb367;
	margin-bottom: 20px;
	overflow: auto;

	@media (min-width: 768px) {
		width: 80%;
	}
`;

const Td = styled.td`
	font-size: 0.8rem;
	text-align: center;
	vertical-align: middle;
`;
