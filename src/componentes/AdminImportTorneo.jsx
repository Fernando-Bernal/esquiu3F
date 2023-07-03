import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CSVReader from "react-csv-reader";
import {
	collection,
	doc,
	writeBatch,
	addDoc,
	getFirestore,
	getDocs,
} from "firebase/firestore";
import Header from "./Header";

function AdminImportTorneo() {
	const db = getFirestore();
	const [categorias, setCategorias] = useState([]);
	const [data, setData] = useState([]);
	const [tabla, setTabla] = useState([]);
	const [loading, setLoading] = useState(false);
	const batch = writeBatch(db);

	const papaparseOptions = {
		header: true,
		dynamicTyping: true,
		skipEmptyLines: true,
		transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
	};

	const handleForce = (data, fileInfo) => {
		console.log(data);
		setData(data);
	};

	useEffect(() => {
		setTabla(data);
	}, [data]);

	const importToFirestore = () => {
		setLoading(true);
		try {
			const docRef = collection(db, "Torneo", `${categorias}`, "equipo");
			data.forEach((row) => {
				const {
					posici_n,
					equipo,
					puntos,
					partidos_jugados,
					partidos_ganados,
					partidos_empatados,
					partidos_perdidos,
					a_favor,
					en_contra,
					diferencia,
				} = row;
				const newDocRef = doc(docRef);
				batch.set(newDocRef, {
					posici_n,
					equipo,
					puntos,
					partidos_jugados,
					partidos_ganados,
					partidos_empatados,
					partidos_perdidos,
					a_favor,
					en_contra,
					diferencia,
				});
			});
			batch.commit().then(() => {
				console.log("Se importaron los datos correctamente");
				setLoading(false);
			});
		} catch (error) {
			console.log(error);
			setLoading(true);
		}
	};

	const deleteCollection = async () => {
		setLoading(true);
		try {
			const docRef = collection(db, "Torneo", `${categorias}`, "equipo");;
			const docDelete = await getDocs(docRef);
			const batch = writeBatch(db);

			docDelete.forEach((doc) => {
				batch.delete(doc.ref);
			});
			await batch.commit();
			console.log("Se borraron los datos correctamente");
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(true);
		}
	};

	const handleCategory = (e) => {
		setCategorias(e.target.value);
	};

	return (
		<DivBackground>
			<Header />
			<DivTitle>
				<h1>IMPORTAR TABLA DE POSICIONES</h1>
				<A href="admin-goles">Goleadores</A>
				<A href="admin-goles">Noticias</A>
			</DivTitle>
			<DivButtons>
				<Select onChange={handleCategory}>
					<option disabled selected>
						Categoria
					</option>
					<option value="libres">Libres</option>
					<option value="+30">+30</option>
					<option value="+36">+36</option>
					<option value="Maxi">Maxi</option>
				</Select>
				<BtnRojo onClick={() => deleteCollection()}>
					{loading ? "Borrando datos" : "Borrar datos viejos"}
				</BtnRojo>
				<CSVReader
					cssClass="react-csv-input"
					label="CSV.."
					onFileLoaded={handleForce}
					parserOptions={papaparseOptions}
				/>
				<Btn onClick={() => importToFirestore()}>
					{loading ? "Cargando tabla" : "Guardar"}
				</Btn>
			</DivButtons>
			<DivTable>
				<table className="table table-sm table-bordered">
					<thead>
						<tr>
							<th>Posicion</th>
							<th>Equipo</th>
							<th>Puntos</th>
							<th>P jugados</th>
							<th>P ganados</th>
							<th>P empatados</th>
							<th>P perdidos</th>
							<th>a_favor</th>
							<th>en_contra</th>
							<th>diferencia</th>
						</tr>
					</thead>
					<tbody>
						{tabla.map((e) => {
							return (
								<tr key={e.posici_n}>
									<td>{e.posici_n}</td>
									<td>{e.equipo}</td>
									<td>{e.puntos}</td>
									<td>{e.partidos_jugados}</td>
									<td>{e.partidos_ganados}</td>
									<td>{e.partidos_empatados}</td>
									<td>{e.partidos_perdidos}</td>
									<td>{e.a_favor}</td>
									<td>{e.en_contra}</td>
									<td>{e.diferencia}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</DivTable>
			<DivInfomation>
				<h4>INFORMACIÓN</h4>
				<p>
					Para importar la tabla de posiciones, debe tener en cuenta que el
					archivo csv debe tener los siguientes campos: Posición, Equipo,
					Puntos, Partidos jugados, Partidos ganados, Partidos empatados,
					Partidos perdidos, A favor, En contra, Diferencia.
				</p>
				<p>
					Si al cargar el archivo csv, hay algún campo que no se ve en la tabla
					de pre-visualización, es porque no está escrito correctamente el
					nombre de la columna desde excel.
				</p>
			</DivInfomation>
		</DivBackground>
	);
}

export default AdminImportTorneo;

const DivBackground = styled.div`
	background-color: #f2f2f2;
	height: 100vh;
    min-height: 100%;
	overflow-y: auto;
`;

// const DivTitle = styled.div`
// 	/* background-color: #14655f; */
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	height: 10vh;
// 	margin-bottom: 50px;
// 	color: #fff;
// `;
const DivTitle = styled.div`
	/* background-color: #14655f; */
	background-color: #f0b21f;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 10vh;
	margin-bottom: 50px;
	color: #fdfdfd;
	
	h1{
		position: relative;
		left: 100px;
		font-size: 1.8rem;
	}
`;

// const A = styled.a`
// 	text-decoration: none;
// 	color: #fff;
// 	height: max-content;
// 	background-color: #259f97;
// 	border-radius: 5px;
// 	padding: 10px;
// 	position: relative;
// 	left: 320px;
// 	margin-left: 10px;
// `;
const A = styled.a`
	text-decoration: none;
	color: #ffffff;
	text-shadow: #3b1a1a 1px 1px 2px;
	height: max-content;
	background-color: #404642;
	border-radius: 5px;
	padding: 10px;
	position: relative;
	left: 320px;
	margin-right: 10px;
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.1);
		transition: all 0.3s ease-in-out;
	}
`;

const DivButtons = styled.div`
	background-color: #ffffff;
	width: 70%;
	margin: 0 auto;
	padding: 20px;
	border-radius: 30px;
	box-shadow: 0 0 10px #999;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Select = styled.select`
	display: block;
	background-color: #f0b21f;
	color: #fff;
	width: 120px;
	height: 30px;
	border-radius: 5px;
	border: none;
	color: #fff;
	font-weight: 500;
	text-align: center;
	cursor: pointer;

	>option{
		color: #ffffff;
	}

	&:hover {
		background-color: #d0950c;
	}
`;
// const Select = styled.select`
// 	display: block;
// 	background-color: #259f9785;
// 	color: #fff;
// 	width: 120px;
// 	height: 30px;
// 	border-radius: 5px;
// 	border: none;
// 	color: #fff;
// 	font-weight: 500;
// 	text-align: center;
// 	cursor: pointer;
// 	&:hover {
// 		background-color: #259f97;
// 	}
// `;

const Btn = styled.button`
	background-color: #f0b21f;
	width: 100px;
	color: #fff;
	font-weight: 500;
	border: none;
	border-radius: 5px;
	padding: 5px;
	cursor: pointer;
	&:hover {
		background-color: #d0950c;
	}
`;
// const Btn = styled.button`
// 	background-color: #259f9785;
// 	color: #fff;
// 	font-weight: 500;
// 	border: none;
// 	border-radius: 5px;
// 	padding: 5px;
// 	cursor: pointer;
// 	&:hover {
// 		background-color: #259f97;
// 	}
// `;
const BtnRojo = styled.button`
	background-color: #d51b1b;
	color: #fff;
	font-weight: 500;
	border: none;
	border-radius: 5px;
	padding: 5px;
	border: 0.2px solid #000000;
	cursor: pointer;
	&:hover {
		background-color: #9b1d1df6;
	}
`;

const DivTable = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 30px auto 10px;
	width: 70%;
`;

const DivInfomation = styled.div`
	margin: 50px auto 10px;
	width: 70%;
	padding: 20px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 0 10px #999;
`;


