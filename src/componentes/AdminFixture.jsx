import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CSVReader from "react-csv-reader";
import {
	collection,
	doc,
	writeBatch,
	getFirestore,
	getDocs,
} from "firebase/firestore";
import Swal from "sweetalert2";
import Header from "./Header";
import Footer from "./Footer";

function AdminFixture() {
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
			const docRef = collection(db, `${categorias}`, "fixture", "fecha");
			data.forEach((row) => {
				const {
					fecha,
					equipo_local,
					equipo_visitante,
					cancha,
					dia,
					horario,
				} = row;
				const newDocRef = doc(docRef);
				batch.set(newDocRef, {
					fecha,
					equipo_local,
					equipo_visitante,
					cancha,
					dia,
					horario,
				});
			});
			batch.commit().then(() => {
				console.log("Importación exitosa");
				setLoading(false);
			});
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Tu publicacion se cargo con exito",
				showConfirmButton: false,
				timer: 1500,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleCategory = (e) => {
		setCategorias(e.target.value);
	};

	const handleFecha = (e) => {
		setFecha(e.target.value);
	};

	const deleteCollection = async () => {
		setLoading(true);
		try {
			const docRef = collection(db, `${categorias}`, "fixture", "fecha");
			const docDelete = await getDocs(docRef);
			docDelete.forEach((doc) => {
				batch.delete(doc.ref);
			});
			batch.commit().then(() => {
				console.log("Se eliminaron los datos correctamente");
				setLoading(false);
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<DivBackground>
			<Header />
			<DivTitle>
				<Divbtn>
					<B href="admin-goles">Goleadores</B>
					<B href="admin-resultados">Resultados</B>
				</Divbtn>
				<h1>IMPORTAR TABLA FIXTURE</h1>
				<Divbtn>
					<A href="admin-torneo"> Torneo</A>
					<A href="admin-noticias"> Noticias</A>
				</Divbtn>
			</DivTitle>
			<DivButtons>
				<Select onChange={handleCategory}>
					<option disabled selected>
						Categoria
					</option>
					<option value="libres">Libres</option>
					<option value="+30">+30</option>
					<option value="+36">+36</option>
					<option value="+40">+40</option>
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
							<th>Fecha</th>
							<th>Equipo Local</th>
							<th>Equipo Visitante</th>
							<th>Cancha</th>
							<th>Dia</th>
							<th>Horario</th>
						</tr>
					</thead>
					<tbody>
						{tabla.map((e) => (
							<tr>
								<td>{e.fecha}</td>
								<td>{e.equipo_local}</td>
								<td>{e.equipo_visitante}</td>
								<td>{e.cancha}</td>
								<td>{e.dia}</td>
								<td>{e.horario}</td>
							</tr>
						))}
					</tbody>
				</table>
			</DivTable>
			<DivInfomation>
				<h4>INFORMACIÓN</h4>
				<p>
					Procedimiento para la carga de datos. Ir por orden de botones <br />
					1) Seleccionar categoría<br />
					2)Borrar datos viejos<br />
					3)Cargar archivo CSV<br /> 
					4)Guardar la información en la base de datos. <br />
					Esta sección está adaptada para usar el modelo de excel "Formato Fixture (proxima fecha)"
					<br />
					
				</p>
				<p>
					Si al cargar el archivo csv, hay algún campo que no se ve en la tabla
					de pre-visualización, es porque no está escrito correctamente el
					nombre de la columna desde excel.
				</p>
			</DivInfomation>
			<Footer />
		</DivBackground>
	);
}

export default AdminFixture;

const DivBackground = styled.div`
	background-color: #f2f2f2;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const DivTitle = styled.div`
	background-color: #25279d;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 10vh;
	margin-bottom: 50px;
	color: #fff;

	h1 {
		position: relative;
		right: 20px;
		font-size: 1.8rem;
	}
`;

const Divbtn = styled.div`
	display: flex;
`;

const A = styled.a`
	text-decoration: none;
	color: #fff;
	text-shadow: #3b1a1a 1px 1px 2px;
	height: max-content;
	background-color: #686ae6;
	border-radius: 5px;
	padding: 10px;
	position: relative;
	right: 10px;
	margin-left: 10px;
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.1);
		transition: all 0.3s ease-in-out;
	}
`;

const B = styled.a`
	text-decoration: none;
	color: #ffffff;
	text-shadow: #3b1a1a 1px 1px 2px;
	height: max-content;
	background-color: #686ae6;
	border-radius: 5px;
	padding: 10px;
	position: relative;
	left: 20px;
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
	background-color: #686ae6;
	color: #fff;
	width: 120px;
	height: 30px;
	border-radius: 5px;
	border: none;
	color: #fff;
	font-weight: 500;
	text-align: center;
	cursor: pointer;

	&:hover {
		background-color: #25279d;
	}
`;

const Btn = styled.button`
	background-color: #686ae6;
	width: 100px;
	color: #fff;
	font-weight: 500;
	border: none;
	border-radius: 5px;
	padding: 5px;
	cursor: pointer;
	&:hover {
		background-color: #25279d;
	}
`;
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

	p {
		text-align: justify;
	}
`;
