import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import equipo from "../assets/img/equipo.jpg";
import Footer from "./Footer";

function Campus() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<AppContainer>
			<Header />
			<DivTitle>
				<DivLine />
				<H1>CAMPUS</H1>
				<DivLine />
			</DivTitle>
			<DivCampus>
				<p>
					Muy pronto tendrás una propuesta diferente en Córdoba. Campus 3 será
					un paraíso futbolístico donde la pasión y la diversión se encuentran
					en un mismo lugar. Aquí, no solo encontrarás canchas de fútbol 11 y 7
					de primera categoría, sino también una experiencia completa para
					disfrutar en familia y con amigos.
					<br />
					Imagínate jugando en nuestras canchas impecablemente mantenidas,
					rodeado de un entorno natural impresionante.
					<br />
				</p>
				<Img src={equipo} alt="" />
				<p>
					Además, armaremos un espectacular espacio para disfrutar de nuestra
					cantina, deleitarte con una deliciosa comida, celebrar victorias y
					compartir emociones con otros amantes del fútbol. También, nuestro
					famoso bosquecito te esperará con asadores listos para disfrutar de un
					costillar o una falda bien preparada y decorar ese tercer tiempo como
					nunca.
					<br />
					Las remodelaciones de nuestro campus, incluye los vestuarios. Nuestras
					instalaciones tendrán toda la comodidad y estilo.
					<br />
					Pero no solo nos enfocamos en el fútbol masculino, sino que también
					promovemos el crecimiento y desarrollo del fútbol femenino. Contaremos
					con programas especializados y apasionantes competiciones para que las
					mujeres futbolistas brillen en todo su esplendor.
					<br />
					Llega Campus 3 a Córdoba y te esperamos para disfrutar juntos una
					experiencia apasionante.
					<br />
					Conocé más detalles ingresando acá 
					<br />
					<A  to="https://www.instagram.com/reel/CtC7-EKuhO1/">https://www.instagram.com/reel/CtC7-EKuhO1/</A>
				</p>
			</DivCampus>
			<Footer />
		</AppContainer>
	);
}

export default Campus;

const AppContainer = styled.div`
  position: absolute;
  z-index: -25;
`

const DivCampus = styled.div`
	width: 75%;
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
	margin: 20px;
	font-weight: 700;
	position: relative;
	z-index: -6;

	@media (min-width: 768px) {
		font-size: 3rem;
	}
`;

const Img = styled.img`
	width: 100%;
	border-radius: 10px;

	@media (min-width: 768px) {
		width: 25%;
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