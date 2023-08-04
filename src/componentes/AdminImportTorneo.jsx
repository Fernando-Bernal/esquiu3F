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
import Header from "./Header";
//import { persistor } from "../redux/store";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import { logout } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AdminImportTorneo() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const db = getFirestore();
	const [categorias, setCategorias] = useState([]);
	const [zona, setZona] = useState([]);
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
			const docRef = collection(db, `${categorias}`, `${zona}`, "equipo");
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
			const docRef = collection(db, `${categorias}`, `${zona}`, "equipo");
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

	const handleZona = (e) => {
		setZona(e.target.value);
	};

	// const handlePurge = () => {
	// 	persistor
	// 		.purge()
	// 		.then(() => {
	// 			navigate("/");
	// 			window.location.reload();
	// 		})
	// 		.catch(() => console.log("No se borraron los datos"));
	// };

	const handleLogOut = () => {
		dispatch(logout());
	};

	return (
		<DivBackground>
			<Header />
			<DivTitle>
				<Divbtn>
					<B href="admin-resultados">Resultados</B>
					<B href="admin-fixture">Fixture</B>
				</Divbtn>
				<h1>IMPORTAR TABLA DE POSICIONES</h1>
				<Divbtn>
					<A href="admin-goles">Goleadores</A>
					<A href="admin-noticias">Noticias</A>
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
				<Select onChange={handleZona}>
					<option disabled selected>
						Zona
					</option>
					<option value="Zona 1">Zona 1</option>
					<option value="Zona 2">Zona 2</option>
					<option value="Oro zona 1">Oro zona 1</option>
					<option value="Oro zona 2">Oro zona 2</option>
					<option value="Plata zona 1">Plata zona 1</option>
					<option value="Plata zona 2">Plata zona 2</option>
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
			<DivBtnSession>
				{/* <BtnRojo onClick={() => handlePurge()}>Borrar cache</BtnRojo> */}
				<BtnRojo onClick={() => handleLogOut()}>Cerrar sesión</BtnRojo>
			</DivBtnSession>
			<DivInfomation>
				<h4>INFORMACIÓN</h4>
				<p>
					Procedimiento para la carga de datos. Ir por orden de botones <br/>1)
					Seleccionar categoría<br/> 2)Seleccionar zona<br/> 3)Borrar datos anteriores<br/>
					4)Cargar archivo CSV<br/> 5)Guardar la información en la base de
					datos. <br/>Esta sección está adaptada para importar tabla de laverade.
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

export default AdminImportTorneo;

const DivBackground = styled.div`
	background-color: #f2f2f2;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const DivTitle = styled.div`
	/* background-color: #14655f; */
	background-color: #f0b21f;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 10vh;
	margin-bottom: 50px;
	color: #fdfdfd;

	h1 {
		position: relative;
		right: 10px;
		font-size: 1.8rem;
	}
`;

const Divbtn = styled.div`
	display: flex;
`;

const A = styled.a`
	text-decoration: none;
	color: #ffffff;
	text-shadow: #3b1a1a 1px 1px 2px;
	height: max-content;
	background-color: #404642;
	border-radius: 5px;
	padding: 10px;
	position: relative;
	right: 10px;
	margin-right: 10px;
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

	> option {
		color: #ffffff;
	}

	&:hover {
		background-color: #d0950c;
	}
`;

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

	p{
		text-align: justify;
	}
`;

const DivBtnSession = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 30px auto 10px;
	gap: 50px;
	width: 70%;
`;
