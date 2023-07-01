import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { getGoalLibres } from "../redux/actions";

function Goleadores() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.glibres);
	const [tabla, setTabla] = useState([]);

	useEffect(() => {
		// const db = getFirestore();
		// const goleadoresCollection = collection(
		// 	db,
		// 	"Goleadores",
		// 	"libres",
		// 	"jugador"
		// );
		// const goleadores = getDocs(goleadoresCollection);
		// goleadores.then((snapshot) => {
		// 	const goleadores = snapshot.docs.map((doc) => {
		// 		return {
		// 			id: doc.orden,
		// 			...doc.data(),
		// 		};
		// 	});
		//     goleadores.sort((a, b)=>{
		//         let ordenA = a.orden;
		//         let ordenB = b.orden;
		//         return ordenA < ordenB ? -1 : ordenA > ordenB ? 1 : 0;
		//       })
		// 	setData(goleadores);
		// });
		dispatch(getGoalLibres());
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
								<th>Nombre</th>
								<th>Equipo</th>
								<th>Goles</th>
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

export default Goleadores;

const DivBackground = styled.div`
	position: absolute;
	background-color: #f8f9fa;
	height: 100vh;
	width: 100%;
`;

const DivTitulo = styled.h2`
	position: relative;
	top: 70px;
	text-align: center;
	font-size: 2rem;
	font-weight: bold;
	color: #212529;
`;

const DivTabla = styled.div`
	width: 80%;
	height: 70vh;
	position: relative;
	margin: auto;
	padding: 10px;
	border-radius: 10px;
	background-color: #f8f9fa;
	box-shadow: 0 0 10px #f8f9fa;
	top: 130px;
	margin-bottom: 20px;
	overflow: auto;
`;

const Td = styled.td`
	font-size: 0.8rem;
	text-align: center;
	vertical-align: middle;
`;
