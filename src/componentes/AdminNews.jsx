import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
	collection,
	doc,
	writeBatch,
	getFirestore,
	getDocs,
} from "firebase/firestore";
import { v4 } from "uuid";
import Header from "./Header";

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
	const idPost = v4();
	const [errors, setErrors] = useState({});
	const [imageUpload, setImageUpload] = useState(null);
	const [post, setPost] = useState({
		//userId: user?.idUser,
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
		</DivBackground>
	);
}

export default AdminNews;

//? Violeta
const DivBackground = styled.div`
	background-color: #f2f2f2;
	height: 100vh;
	min-height: 100%;
	overflow-y: auto;
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
	margin: 0 auto;
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
