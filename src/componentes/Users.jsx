import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "firebase/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, updateDoc, doc } from "firebase/firestore";
import Header from "./Header";
import Footer from "./Footer";
import teamDef from "../assets/img/team_photo.png";
import logoDef from "../assets/img/ph_team5.png";
import { logout } from "../redux/actions";
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
					"libres",
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
				const equipoRef = doc(db, "Equipos", "libres", equipo.email, equipo.email);
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
						EDITA FOTO
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
					<Btn onClick={() => fotoFileInputRef.current.click()}>EDITA FOTO</Btn>
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
						{jugadores.map((e) => {
							return (
								<tr>
									<Td>
										<Imagen src={e.foto} alt="" />
									</Td>
									<Td>{e.nombre}</Td>
									<Td>{e.apellido}</Td>
									<Td>{e.dni}</Td>
									<Td>
										<ColumnBtn>
											<button>E</button>
											<button>B</button>
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
	height: -webkit-fill-available;
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: -2;
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
`;

const Contenedor = styled.div`
	border-radius: 5px;
	height: 120px;
	width: 120px;
	display: flex;
	flex-direction: column;
`;

const Img = styled.img`
	min-height: 100px;
	width: inherit;
	border-radius: 5px;
`;

const Btn = styled.button`
	margin-top: 5px;
	border: 1px solid green;
	background-color: #0d390b;
	color: beige;
	font-weight: 4 00;
`;

const DivBtn = styled.div`
	display: flex;
	justify-content: center;
`;

const BtnNewPlayer = styled.button`
	height: 30px;
	width: auto;
	background-color: #d08c1e;
	color: whitesmoke;
	margin: 20px;
`;

const DivTable = styled.div`
	width: 95%;
	height: auto;
	position: relative;
	margin: 0 auto;
	border-radius: 10px;
	background-color: rgb(248, 249, 250);
	box-shadow: rgb(204, 179, 103) 0px 0px 10px;
	overflow: auto;

	@media (min-width: 768px) {
		width: 60%;
		font-size: 2rem;
	}
`;

const Imagen = styled.img`
	height: 40px;
	width: 40px;
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
