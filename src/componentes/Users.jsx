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
import lapiz from "../assets/img/lapiz.png";
import borrar from "../assets/img/borrar.png";
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
	console.log("🚀 ~ file: Users.jsx:25 ~ Users ~ jugadores:", jugadores.length)


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
				<H4>{equipo.nombre.toUpperCase()}</H4>
			</DivContainer>
			<EscudoFoto>
				<ContenedorEquipo>
					<ImgEquipo src={equipo.foto ? equipo.foto : teamDef} alt="" />
					<BtnEquipo onClick={() => fotoFileInputRef.current.click()}><img src={lapiz} /></BtnEquipo>
					<input
						type="file"
						name="fotoFileInput"
						accept="image/*"
						style={{ display: "none" }}
						onChange={handleFotoFileChange}
						ref={fotoFileInputRef}
					/>
				</ContenedorEquipo>
				<ContenedorLogo>
					<ImgLogo src={equipo.escudo ? equipo.escudo : logoDef} alt="" />
					<BtnLogo onClick={() => escudoFileInputRef.current.click()}>
						<img src={lapiz} />
					</BtnLogo>
					<input
						type="file"
						name="escudoFileInputRef"
						accept="image/*"
						style={{ display: "none" }}
						onChange={handleEscudoFileChange}
						ref={escudoFileInputRef} // Ref para acceder al input desde la función
					/>
				</ContenedorLogo>
			</EscudoFoto>
			<DivBtn>
				{jugadores.length <= 3 ? <BtnNewPlayer onClick={()=> navigate('/usuario/equipo')}> Añade jugador </BtnNewPlayer> : <MsgMax>Maximo 26 jugadores</MsgMax>}
					
				<BtnNewPlayer onClick={() => handleLogOut()}>
					Cerrar sesión
				</BtnNewPlayer>
			</DivBtn>
			<DivTable>
				<table className="table table-striped" id="tableUsuario">
					<thead >
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
											<ButtonTable onClick={() => handleUpdatePlayer(equipo.email, equipo.league, jugador.dni)}><img src={lapiz} /></ButtonTable>
											<ButtonTable onClick={() => handleDeletePlayer(equipo.email, equipo.league, jugador.dni)}><img src={borrar} /></ButtonTable>
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
	max-width: 100vw;
	min-height: 100vh;
	overflow-y: auto;
	position: absolute;
	z-index: -5;

	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		min-width: 100vw;
	}
`;

const DivContainer = styled.div`
	margin: 20px auto;
	position: relative;
	z-index: -3;
	background-color: #0d390b;
	border-top: 5px solid #174f14;
	border-bottom: 5px solid #285a26;
	width: 100%;
	height: 45px;
	border-radius: 10px;

	@media (min-width: 768px) {
		width: 60%;
		margin: 20px auto;
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
	margin: 20px auto;
	position: relative;
	z-index: -3;
	width: 100%;
	height: 200px;

	@media (min-width: 768px) {
		width: 60%;
		margin: 20px auto;
		height: 300px;
																
	}
`;

const ContenedorEquipo = styled.div`
	border-radius: 5px;
	height: 80%;
	width: 100%;
	display: flex;
	flex-direction: column;
	scale: 1;
	margin-bottom: 20px;
	@media (min-width: 768px) {
		height: 90%;
		width: 100%;
		margin-bottom: 0;
		
	}
`;

const BtnEquipo = styled.button`
	height: 40px;
	width: 40px;
	border-radius: 50%;						
	border: none;
	scale: 0.6;
	position: absolute;
	right: 0;
	bottom: 0;
	box-shadow: rgb(100, 100, 100) 0px 0px 10px;
`;

const ImgEquipo = styled.img`
	min-height: 100px;
	width: inherit;
	border-radius: 5px;
	scale: 1;

	@media (min-width: 768px) {
		object-fit: cover;
	}
`;

const ContenedorLogo = styled.div`
	border-radius: 50%;
	height: 100px;
	width: 100px;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 0;
	scale: 1;
	background-color: #fdfdfd;
	box-shadow: rgb(100, 100, 100) 0px 0px 10px;

	@media (min-width: 768px) {
		height: 130px;
		width: 130px;
		scale: 1;
		bottom: -20px;
	}
`;


const ImgLogo = styled.img`
	height: 80px;
	width: 80px;
	position: absolute;	
	left: 50%;
	transform: translateX(-50%);
	bottom: 0;
	

	@media (min-width: 768px) {
		height: 110px;
		width: 110px;
		scale: 1;
	}
`;

const BtnLogo = styled.button`
	height: 40px;
	width: 40px;
	border-radius: 50%;						
	border: none;
	scale: 0.6;
	position: absolute;
	right: -10px;
	bottom: 0;
	box-shadow: rgb(100, 100, 100) 0px 0px 10px;
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
	border: none;
	border-radius: 10px;

	@media (min-width: 768px) {
		width: auto;
		scale: 1;
	}
`;

const DivTable = styled.div`
	
	height: auto;
	position: relative;
	z-index: -3;
	border-radius: 10px;
	box-shadow: rgb(204, 179, 103) 0px 0px 10px;
	scale: 0.95;
	font-size: 0.7rem;
	
	@media (min-width: 768px) {
		width: 60%;
		margin: 20px auto;
		font-size: 1rem;
	}
`;

const Imagen = styled.img`
	height: 30px;
	width: 30px;

	@media (min-width: 768px) {
		height: 50px;
		width: 50px;
	}
`;

const Td = styled.td`
	text-align: center;
	vertical-align: middle;
	@media (min-width: 768px) {
		font-size: 1.2rem;
	}
`;

const ButtonTable = styled.button`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	border: none;
	background-color: #f0c683;
	color: whitesmoke;
	box-shadow: rgb(100, 100, 100) 0px 0px 10px;
	scale: 0.4;

	@media (min-width: 768px) {
		scale: 0.8;
	}
`;

const ColumnBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		justify-content: space-around;
	}

	
`;

const MsgMax = styled.h5`
	color: red;
	text-align: center;
	margin: 20px;
`