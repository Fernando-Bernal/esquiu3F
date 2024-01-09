import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Header from "./Header";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getJugadores } from "../redux/actions";
import back from "../assets/img/back_arrow.png";

function validate(post, imageUpload, pdfUpload) {
	let errors = {};

	if (post.apellido === "") {
		errors.apellido = "Debe ingresar un apellido";
	} else errors.apellido = "";
	if (post.nombre === "") {
		errors.nombre = "Debe ingresar un nombre";
	} else errors.nombre = "";
	if (post.dni === "") {
		errors.dni = "Debe ingresar un dni";
	} else errors.dni = "";
	if (post.fecha_nacimiento === "") {
		errors.fecha_nacimiento = "Debe ingresar un fecha de nacimiento";
	} else errors.fecha_nacimiento = "";
	if (post.tel === "") {
		errors.tel = "Debe ingresar un tel";
	} else errors.tel = "";
	// if (post.tel_contacto === "") {
	// 	errors.tel_contacto = "Debe ingresar un tel de contacto";
	// } else errors.tel_contacto = "";
	if (post.foto === null) {
		errors.foto = "Debe ingresar una foto";
	} else errors.foto = "";
	if (post.ficha_medica === null) {
		errors.ficha_medica = "Debe ingresar una ficha medica";
	} else errors.ficha_medica = "";
	return errors;
}

function FormAddPlayer() {
	const db = getFirestore();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const jugadores = useSelector((state) => state.reducerUsuario.jugadores);
	const user = useSelector((state) => state.reducerUsuario.user);

	const [errors, setErrors] = useState({});
	const [imageUpload, setImageUpload] = useState(null);
	const [pdfUpload, setPdfUpload] = useState(null);
	const [post, setPost] = useState({
		apellido: "",
		nombre: "",
		dni: "",
		fecha_nacimiento: "",
		tel: "",
		//tel_contacto: "",
		foto: "",
		ficha_medica: null,
	});

	function handleChange(e) {
		setPost({
			...post,
			[e.target.name]: e.target.value,
		});
		setErrors(
			validate({
				...post,
				[e.target.name]: e.target.value,
			})
		);
	}

	const handleImageUpload = async () => {
		if (imageUpload) {
			try {
				const storage = getStorage();
				const storageRef = ref(
					storage,
					`equipos/${user.email}/${post.dni}/foto`
				);
				await uploadBytes(storageRef, imageUpload);
				const downloadURL = await getDownloadURL(storageRef);
				return downloadURL;
			} catch (error) {
				console.error("Error al cargar la imagen:", error);
				return null;
			}
		}
		return null;
	};

	const handlePdfUpload = async () => {
		if (pdfUpload) {
			try {
				const storage = getStorage();
				const storageRef = ref(
					storage,
					`equipos/${user.email}/${post.dni}/pdf`
				);
				await uploadBytes(storageRef, pdfUpload);
				const downloadURL = await getDownloadURL(storageRef);
				return downloadURL;
			} catch (error) {
				console.error("Error al cargar la imagen:", error);
				return null;
			}
		}
		return null;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// if (!post.title || !post.text) {
		//   setErrors({ title: "Debe ingresar un titulo", text: "Debe ingresar un texto" });
		//   return;
		//   }

		// Cargar la imagen al Storage de Firebase
		const imageUrl = await handleImageUpload();
		const pdfUrl = await handlePdfUpload();

		// Crear un nuevo post con la URL de la imagen si está presente
		const newPost = {
			apellido: post.apellido,
			nombre: post.nombre,
			dni: post.dni,
			fecha_nacimiento: post.fecha_nacimiento,
			tel: post.tel,
			tel_contacto: post.tel_contacto,
			foto: imageUrl,
			ficha_medica: pdfUrl,
		};

		// Guardar el nuevo post en Firestore
		const postsCollection = collection(
			db,
			`Equipos/${user.league}/${user.league}/${user.email}/${user.email}/${user.email}/jugadores/`
		);
		const documentRef = doc(postsCollection, post.dni);
		try {
			await setDoc(documentRef, newPost);
			console.log("Post guardado con éxito");
			// Restablecer el formulario después de guardar el post
			setPost({
				apellido: "",
				nombre: "",
				dni: "",
				fecha_nacimiento: "",
				tel: "",
				//tel_contacto: "",
				foto: "",
				ficha_medica: "",
			});
			setImageUpload(null);
			setPdfUpload(null);
			setErrors({});
			Swal.fire({
				position: "center",
				icon: "success",
				title: "El jugador se cargo con exito",
				showConfirmButton: false,
				timer: 1500,
			});
			dispatch(getJugadores(user.email, user.league));
			navigate("/usuario");
		} catch (error) {
			console.error("Error al guardar el post:", error);
		}
	};

	return (
		<DivBackground>
			<Header />
			<DivBack>
				<ImgBack src={back} alt="back" onClick={() => navigate("/usuario")} />
			</DivBack>
			<ContactWrapper>
				<ContactH2>Carga un jugador</ContactH2>
				<form action="">
					<ContactLabel htmlFor="">Apellido</ContactLabel>
					<ContactInput
						type="text"
						name="apellido"
						onChange={(e) => handleChange(e)}
					/>
					<ContactLabel htmlFor="">Nombre</ContactLabel>
					<ContactInput
						type="text"
						name="nombre"
						onChange={(e) => handleChange(e)}
					/>
					<ContactLabel htmlFor="">DNI</ContactLabel>
					<ContactInput
						type="number"
						name="dni"
						onChange={(e) => handleChange(e)}
					/>
					<ContactLabel htmlFor="">Fecha de nacimiento</ContactLabel>
					<ContactInput
						type="date"
						name="fecha_nacimiento"
						onChange={(e) => handleChange(e)}
					/>
					<ContactLabel htmlFor="">Tel. personal</ContactLabel>
					<ContactInput
						type="number"
						name="tel"
						onChange={(e) => handleChange(e)}
					/>
					{/* <ContactLabel htmlFor="">Tel. de contacto</ContactLabel>
					<ContactInput
						type="number"
						name="tel_contacto"
						onChange={(e) => handleChange(e)}
					/> */}
					<ContactLabel htmlFor="">Foto</ContactLabel>
					<ContactInput
						type="file"
						name="foto"
						onChange={(evento) => {
							setImageUpload(evento.target.files[0]);
							setPost((foto = imageUpload));
						}}
					/>
					<ContactLabel htmlFor="">Ficha médica</ContactLabel>
					<ContactInput
						type="file"
						name="ficha_medica"
						onChange={(e) => {
							setPdfUpload(e.target.files[0]);
							post.ficha_medica = pdfUpload;
						}}
					/>
					{errors.apellido === "" &&
					errors.nombre === "" &&
					errors.dni === "" &&
					errors.fecha_nacimiento === "" &&
					errors.tel === "" 
					//errors.tel_contacto === "" 
					? (
						// errors.foto != "Debe ingresar una foto" &&
						// errors.ficha_medica != "Debe ingresar una ficha medica"
						<ContactButton
							type="submit"
							id="button"
							onClick={(e) => handleSubmit(e)}
						/>
					) : (
						<div>
							{errors.apellido && (
								<ContactError>{errors.apellido}</ContactError>
							)}
							{errors.nombre && <ContactError>{errors.nombre}</ContactError>}
							{errors.dni && <ContactError>{errors.dni}</ContactError>}
							{errors.fecha_nacimiento && (
								<ContactError>{errors.fecha_nacimiento}</ContactError>
							)}
							{errors.tel && <ContactError>{errors.tel}</ContactError>}
							{/* {errors.tel_contacto && (
								<ContactError>{errors.tel_contacto}</ContactError>
							)} */}
							{errors.foto && <ContactError>{errors.foto}</ContactError>}
							{errors.ficha_medica && (
								<ContactError>{errors.ficha_medica}</ContactError>
							)}
						</div>
					)}
				</form>
			</ContactWrapper>
			<DivMsg>
				Luego de apretar el boton enviar, ten pasiencia, puede tardar unos
				segundos en cargar y automaticamente seras redirigido a la pagina de
				usuario
			</DivMsg>
			<Footer />
		</DivBackground>
	);
}

export default FormAddPlayer;

const DivBackground = styled.div`
	background-color: #f1db92;
	overflow-y: auto;
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: -3;
`;

const DivBack = styled.div`
	margin: 20px auto 5px;
	width: 80%;
	position: relative;
	display: flex;
	justify-content: left;
	align-items: center;
	z-index: -3;
	height: 20px;
	@media (min-width: 768px) {
		width: 30%;
	}
`;

const ImgBack = styled.img`
	width: 45px;
	cursor: pointer;

	@media (min-width: 768px) {
		width: 60px;
	}
`;

const ContactWrapper = styled.div`
	margin: 20px auto;
	padding: 30px;
	background-color: rgba(41, 50, 47, 0.311);
	max-width: 80%;
	box-sizing: border-box;
	border-radius: 10px;
	position: relative;
	z-index: -3;

	@media (min-width: 768px) {
		width: 30%;
		font-size: 1rem;
	}
`;

const ContactH2 = styled.h2`
	color: white;
	text-align: center;

	padding: 0;
`;

const ContactLabel = styled.label`
	font-size: 16px;
	display: block;
	padding: 5px 0;
	color: white;
	font-weight: 600;
`;

const ContactInput = styled.input`
	width: 90%;
	border-radius: 10px;
	height: 40px;
	border: none;
	text-align: center;
`;

const ContactError = styled.strong`
	display: flex;
	justify-content: center;
	margin-top: 5px;
	color: white;
`;
const ContactButton = styled.input`
	margin-top: 15px;
	font-size: 20px;
	font-weight: 600;
	width: 100%;
	border-radius: 13px;
	background-color: #7633b9;
	color: aliceblue;

	&:hover {
		background-color: #431076;
	}
`;

const DivMsg = styled.div`
	margin: 20px auto;
	padding: 30px;
	background-color: rgba(41, 50, 47, 0.311);
	max-width: 80%;
	box-sizing: border-box;
	border-radius: 10px;
	color: white;
	@media (min-width: 768px) {
		width: 30%;
		font-size: 1.1rem;
	}
`;
