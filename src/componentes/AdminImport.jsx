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


function AdminImport() {
	const db = getFirestore();
	const [categorias, setCategorias] = useState([]); //aca se guarda el array de categorias
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
			const docRef = collection(db, "Goleadores", `${categorias}`, "jugador");
			data.forEach((row) => {
				const { nombre, equipo, goles, orden } = row;
				const newDocRef = doc(docRef);
				batch.set(newDocRef, { nombre, equipo, goles, orden });
			});
			batch.commit().then(() => {
				console.log("Se importaron los datos correctamente");
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
			setLoading(true);
		}
	};

	const deleteCollection = async () => {
		setLoading(true);
		try {
			const docRef = collection(db, "Goleadores", `${categorias}`, "jugador");
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
				<Divbtn>
					<B href="admin-resultados">Resultados</B>
					<B href="admin-fixture">Fixture</B>
				</Divbtn>
				<h1>IMPORTAR TABLA DE GOLEADORES</h1>
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
							<th>Nombre</th>
							<th>Equipo</th>
							<th>Goles</th>
							<th>Orden</th>
						</tr>
					</thead>
					<tbody>
						{tabla.map((e) => {
							return (
								<tr key={e.orden}>
									<td>{e.nombre}</td>
									<td>{e.equipo}</td>
									<td>{e.goles}</td>
									<td>{e.orden}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</DivTable>
			<DivInfomation>
				<h4>INFORMACIÓN</h4>
				<p>Primero, seleccionar la categoria a modificar!</p>
				<p>
					Para importar la tabla de Goleadores, debe tener en cuenta que el
					archivo csv debe tener los siguientes campos: ................
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

export default AdminImport;

const DivBackground = styled.div`
	background-color: #f2f2f2;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const DivTitle = styled.div`
	background-color: #20854f;
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
	background-color: #404642;
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
	background-color: #404642;
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
	background-color: #20854f;
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
		background-color: #054d27;
	}
`;

const Btn = styled.button`
	background-color: #20854f;
	width: 100px;
	color: #fff;
	font-weight: 500;
	border: none;
	border-radius: 5px;
	padding: 5px;
	cursor: pointer;
	&:hover {
		background-color: #054d27;
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
`;
