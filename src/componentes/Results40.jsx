import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getResults40, getTorneo40 } from "../redux/actions";

function Results40() {
	const dispatch = useDispatch();
	const results40 = useSelector((state) => state.reducer40.results40);
    const [fecha, setFecha] = useState(["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"]);
	const [tabla, setTabla] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const resultsPerPage = 3;

	useEffect(() => {
		dispatch(getResults40(`Fecha ${[fecha.length - 1]}`));
	}, []);

	useEffect(() => {
		setTabla(results40);
	}, [results40]);

	const selectedDates = fecha.slice(
		currentPage * resultsPerPage,
		(currentPage + 1) * resultsPerPage
	);

	useEffect(() => {
		getResultsForDates(selectedDates);
	}, [currentPage]);

	const getResultsForDates = (selectedDates) => {
		return selectedDates.map((date) => {
			// Lógica para obtener los resultados según la fecha
			return results40.find((result) => result.fecha === date);
		});
	};

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};
	const anterior = "<";
	const posterior = ">";
	return (
		<DivContainer>
			<DivTitulo>RESULTADOS POR FECHAS</DivTitulo>
			<DivFecha>
				<BtnFecha disabled={currentPage === 0} onClick={handlePrevPage}>
					{anterior}
				</BtnFecha>
				{selectedDates.map((date) => (
					<BtnFecha
						key={date}
						active={date === fecha[currentPage]}
						onClick={() => {
							dispatch(getResults40(`Fecha ${date}`));
						}}
					>
						{date}
					</BtnFecha>
				))}
				<BtnFecha
					disabled={
						currentPage === Math.ceil(fecha.length / resultsPerPage) - 1
					}
					onClick={handleNextPage}
				>
					{posterior}
				</BtnFecha>
			</DivFecha>
			<DivTabla>
				<table className="table table-sm table-bordered table-striped custom-header">
					<thead>
						<tr>
							<th id="th">Fecha</th>
							<th id="th">Local</th>
							<th id="th">G</th>
							<th id="th">G</th>
							<th id="th">Visitante</th>
						</tr>
					</thead>
					<tbody>
						{tabla.map((e) => {
							return (
								<tr key={e.id}>
									<Td>{e.dia}</Td>
									<Td>{e.equipo_local}</Td>
									<Td>{e.goles_local}</Td>
									<Td>{e.goles_visitante}</Td>
									<Td>{e.equipo_visitante}</Td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</DivTabla>
		</DivContainer>
	);
}

export default Results40;

const DivContainer = styled.div`
	position: relative;
	z-index: -5;
	background-color: rgb(43, 38, 38);
`;

const DivFecha = styled.div`
	width: 90%;
	height: auto;
	position: relative;
	display: flex;
	justify-content: space-around;
	margin: auto;
	margin-bottom: 20px;
	margin-top: 20px;

	@media (min-width: 768px) {
		width: 40%;
	}
`;

const BtnFecha = styled.button`
	width: 40px;
	height: 30px;
	position: relative;
	border-radius: 100px;
	background-color: #f8f9fa;
	color: #343a40;
	font-weight: bold;
	font-size: 0.8rem;
	border: none;
	box-shadow: 0 0 6px #ccb367;
	cursor: pointer;
	outline: none;

	&:hover {
		background-color: #343a40;
		color: #f8f9fa;
	}

	&:active {
		background-color: #343a40;
		color: #f8f9fa;
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

const Td = styled.td`
	font-size: 0.7rem;
	text-align: center;
	vertical-align: middle;

	@media (min-width: 768px) {
		font-size: 1rem;
	}
`;