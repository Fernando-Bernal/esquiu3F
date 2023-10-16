import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getResultsCopa36 } from "../redux/actions";
import dorada from "../assets/img/copaDorada.png";

function ResultCopa36() {
    const dispatch = useDispatch();
	const [copa, setCopa] = useState("Oro");
	const zona1oro = useSelector((state) => state.reducer36.results36CopaOro1);
	const zona2oro = useSelector((state) => state.reducer36.results36CopaOro2);
	//const zona1plata = useSelector((state) => state.reducer40.results40CopaPlata1);
	//const zona2plata = useSelector((state) => state.reducer40.results40CopaPlata2);
	const [fecha, setFecha] = useState(["1"]);
	const [tabla, setTabla] = useState([]);
	const [tabla2, setTabla2] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const resultsPerPage = 3;

	useEffect(() => {
		if (copa == "Oro") {
			dispatch(getResultsCopa36(`Fecha ${[fecha.length ]}`, `${copa} zona 1`));
			dispatch(getResultsCopa36(`Fecha ${[fecha.length ]}`, `${copa} zona 2`));
		}
		// if (copa == "Plata") {
		// 	dispatch(getResultsCopa40(`Fecha ${[fecha.length ]}`, `${copa} zona 1`));
		// 	dispatch(getResultsCopa40(`Fecha ${[fecha.length ]}`, `${copa} zona 2`));
		// }
	}, [copa]);

	useEffect(() => {
        if (copa == "Oro") {
            setTabla(zona1oro);
            setTabla2(zona2oro);
        }
        // if (copa == "Plata") {
        //     setTabla(zona1plata);
        //     setTabla2(zona2plata);
        // }
	}, [zona1oro, zona2oro, copa]);

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
			return zona1oro.find((result) => result.fecha === date);
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
             <DivEncabezado>
                <img src={dorada} alt=""  />   
		    	<DivTitulo>RESULTADOS POR FECHAS {copa.toLocaleUpperCase()}</DivTitulo>
            </DivEncabezado>
			<DivFecha>
				<BtnFecha disabled={currentPage === 0} onClick={handlePrevPage}>
					{anterior}
				</BtnFecha>
				{selectedDates.map((date) => (
					<BtnFecha
						key={date}
						active={date === fecha[currentPage]}
						onClick={() => {
							dispatch(getResultsCopa36(`Fecha ${date}`, `${copa} zona 1`));
							dispatch(getResultsCopa36(`Fecha ${date}`, `${copa} zona 2`));
							//dispatch(getResults2(`Fecha ${date}`));
						}}
					>
						{date}
					</BtnFecha>
				))}
				<BtnFecha
					disabled={
						currentPage === Math.ceil(fecha.length - 1 / resultsPerPage) - 1
					}
					onClick={handleNextPage}
				>
					{posterior}
				</BtnFecha>
			</DivFecha>
			<DivTabla>
				<H5>Zona 1</H5>
				<table className="table table-sm table-bordered table-striped custom-header">
					<thead>
						<tr>
							<th id="th">Jornada</th>
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
									<Td>{e.jornada}</Td>
									<Td>{e.equipo_1}</Td>
									<Td>{e.resultado_1}</Td>
									<Td>{e.resultado_2}</Td>
									<Td>{e.equipo_2}</Td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<H5>Zona 2</H5>
				<table className="table table-sm table-bordered table-striped custom-header">
					<thead>
						<tr>
							<th id="th">Jornada</th>
							<th id="th">Local</th>
							<th id="th">G</th>
							<th id="th">G</th>
							<th id="th">Visitante</th>
						</tr>
					</thead>
					<tbody>
						{tabla2.map((e) => {
							return (
								<tr key={e.id}>
									<Td>{e.jornada}</Td>
									<Td>{e.equipo_1}</Td>
									<Td>{e.resultado_1}</Td>
									<Td>{e.resultado_2}</Td>
									<Td>{e.equipo_2}</Td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</DivTabla>
		</DivContainer>
	);
}

export default ResultCopa36


const DivContainer = styled.div`
	position: relative;
	z-index: -5;
	background-color: rgb(43, 38, 38);
`;

const DivEncabezado = styled.div`
    display: flex;
    justify-content: space-around;          
    align-items: center;
    margin: 10px auto;
    width: 91%;

    @media (min-width: 768px) {
		width: 35%;
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
    width: 70%;

    @media (min-width: 768px) {
        width: 80%;
    }

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
