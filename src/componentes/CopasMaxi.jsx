import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { getTorneoMaxi } from "../redux/actions";
import dorada from "../assets/img/copaDorada.png";
import desafio from "../assets/img/copaTrofeo.png";

function CopasMaxi() {
    const dispatch = useDispatch();
	const [copa, setCopa] = useState("ORO")
    const zona1 = useSelector((state) => state.reducerMaxi.torneoMaxiOro1);
	const zona2 = useSelector((state) => state.reducerMaxi.torneoMaxiOro2);
	const zona1desafio = useSelector((state) => state.reducerMaxi.torneoMaxiDesafio1);
	const zona2desafio = useSelector((state) => state.reducerMaxi.torneoMaxiDesafio2);
	const [tabla, setTabla] = useState([]);
	const [tabla2, setTabla2] = useState([]);

	useEffect(() => {
		if (copa == "ORO") {
			dispatch(getTorneoMaxi("Oro zona 1"));
			dispatch(getTorneoMaxi("Oro zona 2"));
		}
		if (copa == "DESAFIO") {
			dispatch(getTorneoMaxi("Desafio zona 1"));
			dispatch(getTorneoMaxi("Desafio zona 2"));
		}
	}, [copa]);

	useEffect(() => {
		if (copa == "ORO") {
			setTabla(zona1);
			setTabla2(zona2);
		}
		if (copa == "DESAFIO") {
			setTabla(zona1desafio);
			setTabla2(zona2desafio);
		}
	}, [zona1, zona2, zona1desafio, zona2desafio, copa]);
  
    return (
    <DivContainer>
            <DivEncabezado>
                <img src={dorada} alt="" onClick={() => setCopa("ORO")}/>
			    <DivTitulo>COPA {copa}</DivTitulo>
				<img src={desafio} alt="" onClick={() => setCopa("DESAFIO")}/>
            </DivEncabezado>
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
  )
}

export default CopasMaxi


const DivContainer = styled.div`
	position: relative;
	z-index: -5;
`;

const DivEncabezado = styled.div`
    display: flex;
    justify-content: space-around;          
    align-items: center;
    margin: 10px auto;
    width: 80%;

    @media (min-width: 768px) {
		width: 30%;
		font-size: 1rem;
	}

    img{
        width: 30px;
        height: 30px;
        cursor: pointer;

		@media (min-width: 768px) {
            width: 50px;
            height: 50px;
        }
    }
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
	font-size: 0.7rem;
	text-align: center;
	vertical-align: middle;

	@media (min-width: 768px) {
		font-size: 1rem;
	}
`;
