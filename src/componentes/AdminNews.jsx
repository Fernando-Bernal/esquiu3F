import React, { useState } from "react";
import styled from "styled-components";
import {getFirestore, collection, addDoc, serverTimestamp} from "firebase/firestore";
import { v4 } from "uuid";
import { useSelector } from "react-redux";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Header from "./Header";
import Footer from "./Footer";
import Swal from "sweetalert2";


function validate(post) {
	let errors = {};

	if (post.title === "") {
		errors.title = "Debe ingresar un titulo";
	} else errors.title = "";
	if (post.text === "") {
		errors.text = "Debe ingresar un texto";
	} else errors.text = "";
	return errors;
}

function AdminNews() {
	const db = getFirestore();
	const user = useSelector((state) => state.reducerU.user);
    console.log(user)
	const idPost = v4();
	const [errors, setErrors] = useState({});
	const [imageUpload, setImageUpload] = useState(null);
	const [post, setPost] = useState({
		userId: user? user : "",
		title: "",
		text: "",
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

	// Lógica para cargar la imagen al Storage de Firebase
	const handleImageUpload = async () => {
		if (imageUpload) {
		  try {
			const storage = getStorage();
			const storageRef = ref(storage, `images/${idPost}`);
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

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!post.title || !post.text) {
			setErrors({ title: "Debe ingresar un titulo", text: "Debe ingresar un texto" });
			return;
		  }
	  
		  // Cargar la imagen al Storage de Firebase
		  const imageUrl = await handleImageUpload();
	  
		  // Crear un nuevo post con la URL de la imagen si está presente
		  const newPost = {
			userId: user ? user : "",
			title: post.title,
			text: post.text,
			fecha: serverTimestamp(),
			imageUrl: imageUrl ? imageUrl : "",
		  };
	  
		  // Guardar el nuevo post en Firestore
		  const postsCollection = collection(db, "blog/");
		  try {
			await addDoc(postsCollection, newPost);
			console.log("Post guardado con éxito");
			// Restablecer el formulario después de guardar el post
			setPost({ userId: user ? user : "", title: "", text: "", fecha: new Date() });
			setImageUpload(null);
			setErrors({});
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Tu publicacion se cargo con exito",
				showConfirmButton: false,
				timer: 1500,
			});
		  } catch (error) {
			console.error("Error al guardar el post:", error);
		  }
		};

	return (
		<DivBackground>
			<Header />
			<DivTitle>
				<Divbtn>
					<B href="admin-resultados">Resultados</B>
					<B href="admin-fixture">Fixture</B>
				</Divbtn>
				<h1>CREAR NOTICIA PARA BLOG</h1>
				<Divbtn>
					<A href="admin-goles">Goleadores</A>
					<A href="admin-torneo"> Torneo</A>
				</Divbtn>
			</DivTitle>
			<div>
				<form>
					<ContactWrapper>
						<ContactLabel htmlFor="title">
							TITULO
							<ContactInput
								type="text"
								name="title"
								id="title"
								onChange={(e) => handleChange(e)}
							/>
						</ContactLabel>
						<ContactLabel htmlFor="text">
							TEXTO
							<ContactTextarea
								name="text"
								id=""
								cols="30"
								rows="10"
								value={post.text}
								onChange={(e) => handleChange(e)}
								required={true}
							></ContactTextarea>
						</ContactLabel>
						<ContactLabel>IMAGEN</ContactLabel>
						<ContactInput
							type="file"
							onChange={(evento) => {
								setImageUpload(evento.target.files[0]);
							}}
						/>
						{errors.title === "" && errors.text === "" ? (
							<ContactButton
								type="submit"
								id="button"
								onClick={(e) => handleSubmit(e)}
							/>
						) : (
							<ContactFull>
								Debe completar los campos Titulo y Texto
							</ContactFull>
						)}
					</ContactWrapper>
				</form>
			</div>
			<Footer />
		</DivBackground>
	);
}

export default AdminNews;

//? Violeta
const DivBackground = styled.div`
	background-color: #f2f2f2;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;
const DivTitle = styled.div`
	background-color: #b2b7f0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 10vh;
	margin-bottom: 50px;
	color: #fff;

	h1 {
		position: relative;
		left: 20px;
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
	background-color: #7633b9;
	border-radius: 5px;
	padding: 10px;
	position: relative;
	right: 10px;
	margin-left: 10px;

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
	background-color: #7633b9;
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

const ContactWrapper = styled.div`
	margin: 0 auto 10px;
	padding: 10px 30px;
	background-color: #b2b7f0b7;
	max-width: 500px;
	box-sizing: border-box;
	border-radius: 10px;
`;

const ContactLabel = styled.label`
	font-size: 20px;
	display: block;
	padding: 13px 0;
	color: white;
	text-shadow: 1px 1px 1px #666;
	font-weight: 600;
`;

const ContactTextarea = styled.textarea`
	width: 100%;
	border-radius: 10px;
	padding: 5px;
	border: none;
	margin-top: 5px;
`;

const ContactInput = styled.input`
	width: 100%;
	border-radius: 10px;
	height: 45px;
	border: none;
	margin-top: 5px;
`;

const ContactFull = styled.strong`
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
