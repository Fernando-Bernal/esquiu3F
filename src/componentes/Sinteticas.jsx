import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import cancha from "../assets/img/cancha.jpg";

function Sinteticas() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Header />
			<H1>Canchas sintéticas</H1>
			<DivCampus>
				<p>
                    <Img src={cancha} alt="Cancha sintetica" />
					¡La emoción del fútbol nunca termina en nuestras canchas sintéticas de
					última generación!
					<br />
					Si estás buscando un lugar para jugar al fútbol 11 o 7, tanto de día
					como de noche, nuestras canchas sintéticas son el escenario perfecto
					para tu próxima aventura futbolística. Con una iluminación excepcional
					que garantiza una visibilidad óptima en cualquier momento, podrás
					disfrutar de partidos apasionantes y llenos de energía sin importar la
					hora del día.
					<br />
					Nuestro campo deportivo te ofrece mucho más que solo césped
					artificial. Acá tendrás instalaciones impecables, donde cada detalle
					ha sido cuidadosamente diseñado para brindarte la mejor experiencia de
					juego posible. El césped sintético de alta calidad garantiza un pique
					perfecto de la pelota y una superficie uniforme para que puedas
					desarrollar tu técnica al máximo.
					<br />
					Reservar una cancha es rápido y sencillo. Escribiéndonos un mensaje
					por whatsapp, nosotros te brindaremos los horarios que se adapten a
					tus necesidades y te proporcionará un servicio de calidad en cada
					visita. Además, contamos con tarifas competitivas y opciones flexibles
					para que puedas ajustar tu reserva según tus preferencias.
					<br />
					No esperes más, reserva tu cancha sintética ahora al 3517665551.
				</p>
			</DivCampus>
		</div>
	);
}

export default Sinteticas;

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
