import React from "react";
import styled from "styled-components";
import arquero from "../assets/img/arquero.JPG";
import Header from "./Header";
import Footer from "./Footer";

function QuienesSomos() {
	return (
		<Container>
			<Header />
			<h1>Quiénes Somos</h1>
			<Section>
				<p>
					Bienvenidos a nuestro apasionante proyecto, donde la familia, el
					fútbol y la calidad se unen en un solo lugar.
					<br />
					Somos un equipo comprometido con el deporte y nuestro objetivo es
					proporcionar experiencias deportivas inigualables que fomenten la
					unión familiar y la pasión por el fútbol.
					<br />
					El corazón de nuestro proyecto es el torneo SQ3, una competición de
					fútbol 11 masculino con 6 categorías emocionantes. Queremos que cada
					jugador se desafíe y alcance su máximo potencial, mientras que la
					competencia se combina con el espíritu deportivo y la camaradería.
					<br />
					Pero no nos detenemos ahí. Nuestro Campus ofrece instalaciones de
					primer nivel, incluyendo canchas de calidad que garantizan una
					experiencia de juego excepcional.
					<br />
					Además, el Esquiú Day es una fecha especial en la que celebramos el
					fútbol y el espíritu comunitario. Es un día lleno de diversión,
					partidos amistosos y actividades para todas las edades, creando lazos
					y recuerdos imborrables.
					<br />
					En nuestro proyecto, la calidad es primordial. No solo ofrecemos
					canchas de última generación, sino también un equipo profesional que
					se esfuerza por brindar una experiencia excepcional en cada evento.
					<br />
					Somos más que un proyecto deportivo, somos una familia unida por el
					amor al fútbol y el deseo de crear momentos inolvidables.
					<br />
					Bienvenidos a Esquiú 3.
				</p>
				<Img src={arquero} alt="foto" />
			</Section>
			<div></div>
			<Footer />
		</Container>
	);
}

export default QuienesSomos;

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: -2;

	h1 {
		text-align: center;
		margin-top: 20px;
		position: relative;
		z-index: -4;
	}
`;

const Section = styled.section`
	width: 75%;
	margin: 20px auto;
	padding: 20px;
	text-align: left;
	font-size: 1.2rem;
	line-height: 1.5;
	font-family: "Roboto", sans-serif;
	font-weight: 300;
	position: relative;
	z-index: -10;
	min-height: 100vh;

	@media (min-width: 768px) {
		width: 80%;
	}
`;

const Img = styled.img`
	width: 100%;
	margin: 20px auto;
	display: block;
	position: relative;
	z-index: -10;
`;
