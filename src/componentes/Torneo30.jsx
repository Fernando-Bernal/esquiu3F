import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTorneo30Z1, getTorneo30Z2 } from "../redux/actions";
import styled from "styled-components";

function Torneo30() {
	const dispatch = useDispatch();
	const zona1 = useSelector((state) => state.torneo30Z1);
	const zona2 = useSelector((state) => state.torneo30Z2);
	const [tabla, setTabla] = useState([]);
	const [tabla2, setTabla2] = useState([]);

	useEffect(() =>  {
		if ( zona1.length === 0){
			  dispatch(getTorneo30Z1());
		}
		if(zona2.length === 0){
			dispatch(getTorneo30Z2())
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
				<table className="table table-sm table-bordered">
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
				<table className="table table-sm table-bordered custom-header">
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
	}
`;

const H5 = styled.h5`
	text-align: center;
	color: orange;
	font-weight: bold;
	padding: 5px;
	margin: 0;
`;

const Td = styled.td`
	font-size: 0.7rem;
	text-align: center;
	vertical-align: middle;
`;





//* Modelo de datos de la tabla estaticos
// {
// 	a_favor: 5,
// 	diferencia: 3,
// 	en_contra: 2,
// 	equipo: "TYC FC",
// 	id: "kIDgYj10lN5kGyboUK35",
// 	partidos_empatados: 1,
// 	partidos_ganados: 2,
// 	partidos_jugados: 3,
// 	partidos_perdidos: 0,
// 	posici_n: 0,
// 	puntos: 7,
// },
// {
// 	a_favor: 4,
// 	diferencia: 0,
// 	en_contra: 4,
// 	equipo: "LA ONCE",
// 	id: "AnLTxC5egJ9t4Y1D89e0",
// 	partidos_empatados: 3,
// 	partidos_ganados: 0,
// 	partidos_jugados: 3,
// 	partidos_perdidos: 0,
// 	posici_n: 1,
// 	puntos: 3,
// },
// {
// 	a_favor: 2,
// 	diferencia: -1,
// 	en_contra: 3,
// 	equipo: "EMPALME FC",
// 	id: "PBKnB3ClFM76HBWXdopd",
// 	partidos_empatados: 2,
// 	partidos_ganados: 0,
// 	partidos_jugados: 3,
// 	partidos_perdidos: 1,
// 	posici_n: 2,
// 	puntos: 2,
// },
// {
// 	a_favor: 2,
// 	diferencia: -2,
// 	en_contra: 4,
// 	equipo: "LAS PALMAS FC",
// 	id: "fyvjPa7ltkOkcSxDA4m6",
// 	partidos_empatados: 2,
// 	partidos_ganados: 0,
// 	partidos_jugados: 3,
// 	partidos_perdidos: 1,
// 	posici_n: 3,
// 	puntos: 2,
// }