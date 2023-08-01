import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getFixture36 } from "../redux/actions";

function Fixture36() {
    const dispatch = useDispatch();
    const fixture36 = useSelector((state) => state.reducer36.fixture36);    
    const [tabla, setTabla] = useState([]);

    useEffect(() => {
        if(fixture36?.length === 0) dispatch(getFixture36());
    }, []);

    useEffect(() => {
        setTabla(fixture36);
    }, [fixture36]);

  return (
    <DivContainer>
			<DivTitulo>PRÓXIMA FECHA </DivTitulo>
			<DivTabla>
				<table className="table table-sm table-striped  custom-header">
					<thead>
						<tr>
							<th id="th">Local</th>
							<th id="th">Visitante</th>
							<th id="th">Cancha</th>
							<th id="th">Dia</th>
							<th id="th">Horario</th>
							<th id="th">Fecha</th>
						</tr>
					</thead>
					<tbody>
						{tabla.map((e) => {
							return (
								<tr key={e.id}>
									<Td>{e.equipo_local}</Td>
									<Td>{e.equipo_visitante}</Td>
									<Td>{e.cancha}</Td>
									<Td>{e.dia}</Td>
									<Td>{e.horario}</Td>
									<Td>{e.fecha}</Td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</DivTabla>
		</DivContainer>
  )
}

export default Fixture36

const DivContainer = styled.div`
	position: relative;
	z-index: -5;
	background-color: rgb(43, 38, 38);
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

const Td = styled.td`
	font-size: 0.5rem;
	text-align: center;
	vertical-align: middle;

    @media (min-width: 768px) {
        font-size: 1rem;
    }
`;