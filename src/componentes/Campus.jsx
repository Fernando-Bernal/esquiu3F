import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import equipo from "../assets/img/equipo.jpg";

function Campus() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

	return (
		<div>
			<Header />
			<H1>Campus</H1>
			<DivCampus>
				<p>
					Se viene una propuesta diferente en Córdoba. Campus 3 será un paraíso
					futbolístico donde la pasión y la diversión se encuentran en un mismo
					lugar. Aquí, no solo encontrarás canchas de fútbol 11 y 7 de primera
					categoría, sino también una experiencia completa para disfrutar en
					familia y con amigos.
					<br />
					Imagínate jugando en nuestras canchas impecablemente mantenidas,
					rodeado de un entorno natural impresionante. Cada paso que des en el
					césped, natural o sintético, te acercará más a la grandeza del deporte
					más hermoso del mundo.
				</p>
				<Img src={equipo} alt="" />
				<p>
					Y si esa experiencia con la redonda no es suficiente, el campo
					deportivo tendrá muy en cuenta que el fútbol es la manera más hermosa
					de conectar con quienes queremos. Es por eso que hemos creado un
					espacio espectacular para disfrutar de nuestra cantina, deleitarte con
					una deliciosa comida, celebrar victorias y compartir emociones con
					otros amantes del fútbol. Además, nuestro famoso bosquecito te
					esperará con asadores listos para disfrutar de un costillar o una
					falda bien preparada y decorar ese tercer tiempo como nunca.
					<br />
					Las remodelaciones de nuestro campus, incluye los vestuarios. Nuestras
					instalaciones tendrán toda la comodidad y estilo. Después de un
					partido intenso, podrás relajarte y recuperarte en un ambiente moderno
					y equipado con todas las comodidades que necesitas. Queremos que te
					sientas como un verdadero profesional desde el primer momento en que
					llegues a nuestro campus.
					<br />
					Pero no solo nos enfocamos en el fútbol masculino, sino que también
					promovemos el crecimiento y desarrollo del fútbol femenino. Contamos
					con programas especializados y apasionantes competiciones para que las
					mujeres futbolistas brillen en todo su esplendor. Aquí, todos tienen
					la oportunidad de desplegar su talento y disfrutar de esta hermosa
					disciplina.
					<br />
					Y para aquellos que buscan la comodidad y versatilidad, ofrecemos
					canchas sintéticas de última generación. Podrás jugar sin importar las
					condiciones climáticas y disfrutar de un juego fluido y emocionante.
					No hay límites para lo que puedes lograr en nuestro campo deportivo.
					<br />
					Llega Campus 3 a Córdoba y te esperamos para disfrutar juntos una
					experiencia apasionante.
				</p>
			</DivCampus>
		</div>
	);
}

export default Campus;

const DivCampus = styled.div`
	width: 75%;
	margin: 0 auto;
	padding: 20px;
	text-align: left;
	font-size: 1.2rem;
	line-height: 1.5;
	font-family: "Roboto", sans-serif;

	@media (min-width: 768px) {
		width: 80%;
	}
`;

const H1 = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    margin: 20px 0;
    font-weight: 700;

    @media (min-width: 768px) {
        font-size: 3rem;
    }
`;

const Img = styled.img`
	width: 100%;
    border-radius: 10px;

    @media (min-width: 768px) {
        width: 40%;
        height: 500px;
        float: right;
        margin-left: 20px;
       
    }
`;
