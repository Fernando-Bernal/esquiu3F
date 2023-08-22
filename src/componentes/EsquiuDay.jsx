import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import predio from "../assets/img/predio2.jpg";
import Footer from "./Footer";

function EsquiuDay() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<AppContainer>
			<Header />
			<DivTitle>
				<DivLine />
				<H1>ESQUIÚ DAY</H1>
				<DivLine />
			</DivTitle>
			<DivCampus>
				<p>
					<Img src={predio} alt="Cancha sintetica" />
					Sabemos que la motivación y el bienestar de los empleados son
					fundamentales para el éxito de cualquier empresa. Es por eso que
					ofreceremos un programa especial para empresas que desean fidelizar a
					sus empleados y promover un ambiente laboral saludable y divertido.
					<br />
					Imagínate el impacto positivo que tendría en tu equipo de trabajo organizar partidos de fútbol en nuestras canchas de última generación.
					<br />
					Nuestras instalaciones están diseñadas para que todos se sientan como en casa. Después del partido, podrán disfrutar de un merecido descanso en nuestros vestuarios, equipados con duchas modernas y cómodas. Y para culminar la experiencia, ¿qué mejor manera de celebrar que con un asado?
					<br />
					Además, contamos con paquetes personalizados que incluyen descuentos exclusivos para empresas, brindando una excelente relación calidad-precio para que puedas ofrecer a tus empleados una experiencia única y gratificante.
					<br />
					¡Contactate con nosotros y juntos crearemos una experiencia inolvidable para tu empresa!
					<br />
					Más info por whatsapp escribiendo al 
					
					<A
						className="ahedear"
						target="_blank"
						href="https://api.whatsapp.com/send?phone=+5493517665551&text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre..."
					>
						3517665551.
					</A>
				</p>
			</DivCampus>
			<Footer />
		</AppContainer>
	);
}

export default EsquiuDay;

const A = styled.a`
	text-decoration: none; 
	margin-left: 7px;
`

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
	z-index: -10;
	margin-bottom: 20px;

	@media (min-width: 768px) {
		width: 25%;
		float: right;
		margin-left: 20px;
	}
`;
