import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTorneoZona } from "../redux/actions";
import styled from "styled-components";

function Torneo() {
	const dispatch = useDispatch();
	const zona1 = useSelector((state) => state.reducerLibre.torneolibresZ1);
	const zona2 = useSelector((state) => state.reducerLibre.torneolibresZ2);
	const [tabla, setTabla] = useState([]);
	const [tabla2, setTabla2] = useState([]);

	useEffect(() => {
		if (zona1.length === 0) {
			dispatch(getTorneoZona("Zona 1"));
			dispatch(getTorneoZona("Zona 2"));
		}		
	}, []);

	useEffect(() => {
		setTabla(zona1);
		setTabla2(zona2);
	}, [zona1, zona2]);

	return (
		<DivContainer>
			<DivTitulo>POSICIONES</DivTitulo>
			<DivTabla>
				<H5>Zona 1</H5>
				<table className="table table-sm table-striped table-bordered custom-header">
					<thead>
						<tr>
							<th id="th">Equipo</th>
							<th id="th">P</th>
							<th id="th">PJ</th>
							<th id="th">PG</th>
							<th id="th">PE</th>
							<th id="th">PP</th>
							<th id="th">GF</th>
							<th id="th">GE</th>
							<th id="th">GD</th>
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
				<H5>Zona 2</H5>
				<table className="table table-sm table-striped ">
					<thead>
						<tr>
							<th id="th">Equipo</th>
							<th id="th">P</th>
							<th id="th">PJ</th>
							<th id="th">PG</th>
							<th id="th">PE</th>
							<th id="th">PP</th>
							<th id="th">GF</th>
							<th id="th">GE</th>
							<th id="th">GD</th>
						</tr>
					</thead>
					<tbody>
						{tabla2.map((e) => {
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

export default Torneo;

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
	width: 90%;
	height: auto;
	position: relative;
	margin: auto;
	border-radius: 10px;
	background-color: #f8f9fa;
	box-shadow: 0 0 10px #ccb367;
	margin-bottom: 20px;
	overflow: auto;

	@media (min-width: 768px) {
		width: 40%;
		font-size: 1rem;
	}
`;

const H5 = styled.h5`
	text-align: center;
	color: orange;
	font-weight: bold;
	padding: 5px;
	margin: 0;

	@media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Td = styled.td`
	font-size: 0.6rem;
	text-align: center;
	vertical-align: middle;

	@media (min-width: 768px) {
        font-size: 1rem;
    }
`;


