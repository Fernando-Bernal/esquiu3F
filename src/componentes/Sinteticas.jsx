import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import cancha from "../assets/img/cancha.jpg";
import Footer from "./Footer";

function Sinteticas() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<AppContainer>
			<Header />
			<DivTitle>
				<DivLine />
				<H1>CANCHAS SINTÉTICAS</H1>
				<DivLine />
			</DivTitle>
			<DivCampus>
				<p>
					<Img src={cancha} alt="Cancha sintetica" />
					<br />
					¡La emoción del fútbol nunca termina!
					<br />
					Muy pronto inauguraremos nuestra cancha sintética, adaptada para
					fútbol 11 y también para fútbol 7, para que puedas disfrutar de Esquiú
					todos los días de la semana. Además, con una iluminación excepcional
					que garantiza una visibilidad óptima en cualquier momento, podrás
					disfrutar de partidos apasionantes y llenos de energía sin importar la
					hora del día.
					<br />
					El césped sintético de alta calidad garantiza un pique perfecto de la
					pelota y una superficie uniforme para que puedas desarrollar tu
					técnica al máximo.
					<br />
					¿Querés ver más sobre el proyecto? Mirá:
					<A to="https://www.instagram.com/reel/CtLCcC4NcbG/">
						{" "}
						https://www.instagram.com/reel/CtLCcC4NcbG/
					</A>
					<br />
				</p>
			</DivCampus>
			<Footer />
		</AppContainer>
	);
}

export default Sinteticas;

const AppContainer = styled.div`
	position: absolute;
	z-index: -25;
`;

const DivCampus = styled.div`
	width: 75%;
	min-height: 65vh;
	margin: 0 auto;
	padding: 20px;
	text-align: left;
	font-size: 1.2rem;
	line-height: 1.5;
	font-family: "Roboto", sans-serif;
	position: relative;
	z-index: -6;

	@media (min-width: 768px) {
		width: 80%;
	}
`;

const DivTitle = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: -6;
`;

const DivLine = styled.div`
	width: 30px;
	height: 2px;
	background-color: orange;
`;

const H1 = styled.h1`
	font-size: 2rem;
	text-align: center;
	margin: 20px 0;
	font-weight: 700;
	position: relative;
	z-index: -6;

	@media (min-width: 768px) {
		font-size: 3rem;
		margin: 20px;
	}
`;

const Img = styled.img`
	width: 100%;
	border-radius: 10px;
	z-index: -10;
	margin-bottom: 20px;

	@media (min-width: 768px) {
		width: 20%;
		float: right;
		margin-left: 20px;
	}
`;

const A = styled.a`
	color: #191988; 
  text-decoration: underline;
  word-break: break-all;
  font-size: smaller;
`