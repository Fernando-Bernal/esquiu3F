import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "firebase/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, updateDoc, doc, deleteDoc} from "firebase/firestore";
import Header from "./Header";
import Footer from "./Footer";
import teamDef from "../assets/img/team_photo.png";
import logoDef from "../assets/img/ph_team5.png";
import { getJugadores, logout, updateJugador } from "../redux/actions";
import { useNavigate } from "react-router-dom";


function Users() {
	
	const db = getFirestore();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const escudoFileInputRef = useRef(null);
	const fotoFileInputRef = useRef(null);
	const equipo = useSelector((state) => state.reducerUsuario.user);
	const jugadores = useSelector((state) => state.reducerUsuario.jugadores);


	const handleEscudoFileChange = async (e) => {
		// Aquí puedes manejar el cambio de archivo
		const selectedFile = e.target.files[0];

		if (selectedFile) {
			const storage = getStorage();
			const storageRef = ref(storage, `equipos/${equipo.email}/escudo`);
			try {
				await uploadBytes(storageRef, selectedFile);
				const downloadURL = await getDownloadURL(storageRef);
				const equipoRef = doc(
					db,
					"Equipos",
					equipo.league,
					equipo.league,
					equipo.email,
					equipo.email,
					equipo.email
				);
				await updateDoc(equipoRef, { escudo: downloadURL });

				console.log("Foto subida y documento actualizado con éxito.");
			} catch (error) {
				console.error(
					"Error al subir la foto y actualizar el documento:",
					error
				);
			}
		}
	};

	const handleFotoFileChange = async (e) => {
		const selectedFile = e.target.files[0];

		if (selectedFile) {
			const storage = getStorage();
			const storageRef = ref(storage, `equipos/${equipo.email}/foto`);
			try {
				await uploadBytes(storageRef, selectedFile);
				const downloadURL = await getDownloadURL(storageRef);

				// Actualiza la propiedad "foto" del equipo en Firestore
				const equipoRef = doc(db, "Equipos", equipo.league, equipo.league, equipo.email, equipo.email, equipo.email);
				await updateDoc(equipoRef, { foto: downloadURL }); // Actualiza la propiedad "foto"

				console.log("Foto subida y documento actualizado con éxito.");
			} catch (error) {
				console.error(
					"Error al subir la foto y actualizar el documento:",
					error
				);
			}
		}
	};

	const handleUpdatePlayer = async (email, league, id) => {
		
		dispatch(updateJugador(email, league, id)).then(() => {
			navigate("/usuario/equipo/editar-jugador");
		});
	}

	const handleDeletePlayer = async (email, league, id) => {
		const jugadorRef = doc(db, "Equipos", league, league, email, email, email, "jugadores", id);
		await deleteDoc(jugadorRef);
		dispatch(getJugadores(email, league));
	}


	const handleLogOut = () => {
		navigate("/");
		dispatch(logout());
	};

	return (
		
		<Container>
			<Header />
			<DivContainer>
				<H4>EDITA INFORMACIÓN DE {equipo.nombre.toUpperCase()}</H4>
			</DivContainer>
			<EscudoFoto>
				<Contenedor>
					<Img src={equipo.escudo ? equipo.escudo : logoDef} alt="" />
					<Btn onClick={() => escudoFileInputRef.current.click()}>
						FOTO ESCUDO
					</Btn>
					<input
						type="file"
						name="escudoFileInputRef"
						accept="image/*"
						style={{ display: "none" }}
						onChange={handleEscudoFileChange}
						ref={escudoFileInputRef} // Ref para acceder al input desde la función
					/>
				</Contenedor>
				<Contenedor>
					<Img src={equipo.foto ? equipo.foto : teamDef} alt="" />
					<Btn onClick={() => fotoFileInputRef.current.click()}>FOTO EQUIPO</Btn>
					<input
						type="file"
						name="fotoFileInput"
						accept="image/*"
						style={{ display: "none" }}
						onChange={handleFotoFileChange}
						ref={fotoFileInputRef}
					/>
				</Contenedor>
			</EscudoFoto>
			<DivBtn>
				<BtnNewPlayer onClick={()=> navigate('/usuario/equipo')}> Añade jugador </BtnNewPlayer>
				<BtnNewPlayer onClick={() => handleLogOut()}>
					Cerrar sesión
				</BtnNewPlayer>
			</DivBtn>
			<DivTable>
				<table className="table table-striped">
					<thead>
						<tr>
							<th id="th">Foto</th>
							<th id="th">Nombre</th>
							<th id="th">Apellido</th>
							<th id="th">DNI</th>
							<th id="th">Opciones</th>
						</tr>
					</thead>
					<tbody>
						{jugadores.map((jugador) => {
							return (
								<tr>
									<Td>
										<Imagen src={jugador.foto} alt="" />
									</Td>
									<Td>{jugador.nombre}</Td>
									<Td>{jugador.apellido}</Td>
									<Td>{jugador.dni}</Td>
									<Td>
										<ColumnBtn>
											<button onClick={() => handleUpdatePlayer(equipo.email, equipo.league, jugador.dni)}>E</button>
											<button onClick={() => handleDeletePlayer(equipo.email, equipo.league, jugador.dni)}>B</button>
										</ColumnBtn>
									</Td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</DivTable>
			<Footer />
		</Container>
	);
}

export default Users;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	overflow-y: auto;
	position: absolute;
	z-index: -5;

	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;

const DivContainer = styled.div`
	top: 20px;
	position: relative;
	z-index: -3;
	background-color: #0d390b;
	border-top: 5px solid #174f14;
	border-bottom: 5px solid #285a26;
	/* background-color: #d08c1e;
	border-top: 5px solid #ffbc5076;
	border-bottom: 5px solid #a16709; */
	width: 100%;
	height: 45px;

	@media (min-width: 768px) {
		width: 60%;
		margin: 0 auto;
		font-size: 1rem;
	}
`;

const H4 = styled.h4`
	font-size: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 6px;
	color: beige;
`;
const EscudoFoto = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 40px 0;
	position: relative;
	z-index: -3;
`;

const Contenedor = styled.div`
	border-radius: 5px;
	height: 120px;
	width: 120px;
	display: flex;
	flex-direction: column;
	scale: 0.9;

	@media (min-width: 768px) {
		height: 150px;
		width: 150px;
		scale: 1;
	}
`;

const Img = styled.img`
	min-height: 100px;
	width: inherit;
	border-radius: 5px;
	scale: 1;

	@media (min-width: 768px) {
		height: 120px;
		width: inherit;
		scale: 1;
	}
`;

const Btn = styled.button`
	margin-top: 5px;
	border: 1px solid green;
	background-color: #0d390b;
	color: beige;
	font-weight: 400;
`;

const DivBtn = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	z-index: -3;
`;

const BtnNewPlayer = styled.button`
	height: 30px;
	width: auto;
	background-color: #d08c1e;
	color: whitesmoke;
	margin: 20px;
	scale: 0.8;

	@media (min-width: 768px) {
		width: auto;
		scale: 1;
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
		width: 60%;
		font-size: 2rem;
	}
`;

const Imagen = styled.img`
	height: 30px;
	width: 30px;
`;

const Td = styled.td`
	text-align: center;
	vertical-align: middle;
	@media (min-width: 768px) {
		font-size: 1.2rem;
	}
`;

const ColumnBtn = styled.div`
	display: flex;
	justify-content: space-around;
`;

const ContactInput = styled.input`
	width: 100%;
	border-radius: 10px;
	height: 45px;
	border: none;
	margin-top: 5px;
	background-color: blue;
`;
