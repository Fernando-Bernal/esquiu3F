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

function AdminImportTorneo() {
	const db = getFirestore();
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
			const docRef = collection(db, "TorneoLibres");
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
			const docRef = collection(db, "TorneoLibres");
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

	return (
		<DivBackground>
			<DivTitle>
				<h1>Importar tabla de posiciones</h1>
			</DivTitle>
			<Btn onClick={() => deleteCollection()}>
				{loading ? "Borrando datos" : "Borrar datos viejos"}
			</Btn>
			<CSVReader
				cssClass="react-csv-input"
				label="Seleccione el archivo csv que quiera subir...  "
				onFileLoaded={handleForce}
				parserOptions={papaparseOptions}
			/>
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
			<Btn onClick={() => importToFirestore()}>
				{loading ? "Cargando tabla" : "Guardar"}
			</Btn>
			<DivInfomation>
				<h3>Informacion</h3>
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
`;

const DivTitle = styled.div`
	background-color: #b2b7f0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 10vh;
	margin-bottom: 50px;
`;

const DivTable = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 30px auto 10px;
	width: 70%;
`;

const DivInfomation = styled.div`
	margin: 20px auto;
	width: 70%;
	padding: 20px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 0 10px #999;
`;

const Btn = styled.button`
	background-color: #b2b7f0;
	color: #fff;
	font-weight: 500;
	border: none;
	border-radius: 5px;
	padding: 5px 10px;
	margin: 0 10px;
	position: relative;
	right: -450px;

	cursor: pointer;
	&:hover {
		background-color: #6a72cf;

	}
`;
