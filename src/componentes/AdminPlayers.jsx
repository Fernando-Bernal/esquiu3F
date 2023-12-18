import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/img/logotipo-sq3-torneo.png";
import Header from "./Header";
import Footer from "./Footer";
import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
function AdminPlayers() {
	const db = getFirestore();
	const [categorias, setCategorias] = useState([]);
	const [equipos, setEquipos] = useState([]);
	const [jugadores, setJugadores] = useState([]);
	console.log(
		"🚀 ~ file: AdminPlayers.jsx:14 ~ AdminPlayers ~ jugadores:",
		jugadores
	);
	const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
	const [equipoSeleccionado, setEquipoSeleccionado] = useState("");

	useEffect(() => {
		const obtenerCategorias = async () => {
			try {
				const snapshot = query(collection(db, "Equipos"));
				const querySnapshot = await getDocs(snapshot);
				const categoriasData = querySnapshot.docs.map((doc) => doc.id);
				setCategorias(categoriasData);
			} catch (error) {
				console.error("Error al obtener categorías:", error);
			}
		};

		obtenerCategorias();
	}, []);

	const obtenerEquipos = async () => {
		try {
			if (categoriaSeleccionada) {
				console.log("entre a obtener equipos");
				const snapshot = query(
					collection(
						db,
						`Equipos/${categoriaSeleccionada}/${categoriaSeleccionada}`
					)
				);
				const querySnapshot = await getDocs(snapshot);
				const equiposData = querySnapshot.docs.map((doc) => doc.id);
				console.log("equiposData:", equiposData);
				setEquipos(equiposData);
			}
		} catch (error) {
			console.error("Error al obtener equipos:", error);
		}
	};

	const obtenerDatos = async () => {
		try {
			if (categoriaSeleccionada && equipoSeleccionado) {
				const snapshot = query(
					collection(
						db,
						`Equipos/${categoriaSeleccionada}/${categoriaSeleccionada}/${equipoSeleccionado}/${equipoSeleccionado}/${equipoSeleccionado}/jugadores`
					)
				);
				const querySnapshot = await getDocs(snapshot);
				const datosJugadores = querySnapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));
				setJugadores(datosJugadores);
			}
		} catch (error) {
			console.error("Error al obtener datos:", error);
		}
	};

	const handleCategoriaChange = (event) => {
		setCategoriaSeleccionada(event.target.value);
		setEquipoSeleccionado(""); // Reiniciar el equipo seleccionado al cambiar la categoría
	};

	const handleEquipoChange = (event) => {
		setEquipoSeleccionado(event.target.value);
	};

	const handleImprimirClick = () => {
		window.print();
	};

	return (
		<div>
			<DivFilters>
				<div>
					<label>Categoría:</label>
					<select
						value={categoriaSeleccionada}
						onChange={handleCategoriaChange}
					>
						<option value="">Seleccionar Categoría</option>
						{categorias.map((categoria, index) => (
							<option key={index} value={categoria}>
								{categoria}
							</option>
						))}
					</select>
					<button onClick={obtenerEquipos}>Buscar</button>
				</div>
				<div>
					<label>Equipo:</label>
					<select onChange={handleEquipoChange}>
						<option value="">Seleccionar Equipo</option>
						{equipos.map((equipo, index) => (
							<option key={index} value={equipo}>
								{equipo}
							</option>
						))}
					</select>
					<button onClick={obtenerDatos}>Buscar</button>
				</div>
				<button onClick={handleImprimirClick}>Imprimir</button>
        <ImgLogo src={logo} alt="" />
			</DivFilters>
			<DivTable>
				<table className="table table-striped">
					<thead>
						<tr>
							<th id="th">Foto</th>
							<th id="th">Nombre</th>
							<th id="th">Apellido</th>
							<th id="th">DNI</th>
							<th id="th">Numero</th>
							<Th id="th">Firma</Th>
						</tr>
					</thead>
					<tbody>
						{jugadores.map((jugador, index) => (
							<tr key={index}>
								<Td>
									<Imagen src={jugador.foto} alt="" />
								</Td>
								<Td>{jugador.nombre}</Td>
								<Td>{jugador.apellido}</Td>
								<Td>{jugador.dni}</Td>
								<Td></Td>
								<Td></Td>
							</tr>
						))}
					</tbody>
				</table>
			</DivTable>
		</div>
	);
}

export default AdminPlayers;

const DivFilters = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 20px;
	@media (min-width: 768px) {
		font-size: 1rem;
	}
`;

const ImgLogo = styled.img`
  height: 80px;
  width: 80px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;


const DivTable = styled.div`
	width: 95%;
	height: auto;
	position: relative;
	z-index: -3;
	margin: 0 auto;
	border-radius: 10px;
	background-color: rgb(248, 249, 250);
	box-shadow: rgb(204, 179, 103) 0px 0px 10px;
	margin-bottom: 20px;
	font-size: 0.8rem;
	@media (min-width: 768px) {
		width: 80%;
		font-size: 2rem;
	}
`;

const Imagen = styled.img`
	height: 80px;
	width: 80px;
`;

const Td = styled.td`
	text-align: center;
	vertical-align: middle;
	@media (min-width: 768px) {
		font-size: 1.2rem;
	}
`;

const Th = styled.th`
  width: 150px;
`;
