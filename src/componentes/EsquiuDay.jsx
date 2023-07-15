import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import predio from "../assets/img/predio2.jpg";

function EsquiuDay() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Header />
			<H1>Esquiu Day</H1>
			<DivCampus>
				<p>
					<Img src={predio} alt="Cancha sintetica" />
					Sabemos que la motivación y el bienestar de los empleados son
					fundamentales para el éxito de cualquier empresa. Es por eso que
					ofrecemos un programa especial para empresas que desean fidelizar a
					sus empleados y promover un ambiente laboral saludable y divertido.
					<br />
					Imagínate el impacto positivo que tendría en tu equipo de trabajo
					organizar partidos de fútbol en nuestras canchas de última generación.
					Los empleados podrán disfrutar de un merecido descanso después de una
					semana de arduo trabajo, fortaleciendo los lazos de equipo y liberando
					el estrés acumulado.
					<br />
					Nuestras instalaciones están diseñadas para que todos se sientan como
					en casa. Después del partido, podrán disfrutar de un merecido descanso
					en nuestros vestuarios, equipados con duchas modernas y cómodas. Y
					para culminar la experiencia, ¿qué mejor manera de celebrar que con un
					asado?
					<br />
					En nuestro campo deportivo, entendemos la importancia de crear
					momentos inolvidables. Nos aseguraremos de que cada detalle esté
					cubierto para que tus empleados puedan concentrarse en lo más
					importante: disfrutar del juego y fortalecer los lazos entre colegas.
					<br />
					Además, contamos con paquetes personalizados que incluyen descuentos
					exclusivos para empresas, brindando una excelente relación
					calidad-precio para que puedas ofrecer a tus empleados una experiencia
					única y gratificante.
					<br />
					En resumen, en nuestro campo deportivo no solo nos preocupamos por
					ofrecer instalaciones de primer nivel, sino que también nos enfocamos
					en crear oportunidades para fidelizar a tus empleados y fortalecer la
					cultura laboral. Te invitamos a descubrir cómo el fútbol, las
					instalaciones de calidad y un buen asado pueden convertirse en una
					poderosa herramienta para el crecimiento y el éxito de tu empresa.
					<br />
					¡Contacta con nosotros y juntos crearemos una experiencia inolvidable
					para tus empleados en nuestro campo deportivo!
					<br />
					Más info por whatsapp escribiendo al 3517665551.
				</p>
			</DivCampus>
		</div>
	);
}

export default EsquiuDay;

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

const H1 = styled.h1`
	font-size: 2.5rem;
	text-align: center;
	margin: 20px 0;
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

	@media (min-width: 768px) {
		width: 40%;
		height: 400px;
		float: right;
		margin-left: 20px;
	}
`;
