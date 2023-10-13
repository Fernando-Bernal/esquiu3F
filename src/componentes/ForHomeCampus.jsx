import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import backgroundNegro from "../assets/img/fondoNegro.webp";
import arquero from "../assets/img/arquero.JPG";
import cancha from "../assets/img/cancha.jpg";
import carpa from "../assets/img/powerade.JPG";

function CampusForHome() {
	const cards = [
		{
			image: arquero,
			h3: "Esquiu Day",
			parafo: "Pasá un día inolvidable en todas nuestras instalaciones.",
			boton: "Ver más",
			link: "/esquiuday",
		},
		{
			image: cancha,
			h3: "Canchas sintetica",
			parafo: "jugá en nuestras nuevas canchas de fútbol 11 y 7 sintéticas.",
			boton: "Reservar",
			link: "https://api.whatsapp.com/send?phone=+5493517665551&text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre...",
		},
		{
			image: carpa,
			h3: "Y más...",
			parafo: "Conocé todos nuestros servicios.",
			boton: "Ver más",
			link: "/campus",
		},
	];
	const [currentCard, setCurrentCard] = useState(0);

	const nextCard = () => {
		setCurrentCard((currentCard + 1) % cards.length);
	};

	const prevCard = () => {
		setCurrentCard((currentCard - 1 + cards.length) % cards.length);
	};

	return (
		<SectionCampus>
			<h2>CAMPUS 3</h2>
			<DivCampus>
				<Arrows>
					<Arrow onClick={prevCard}>&lt;</Arrow>
					<DivCampusCard>
						<img src={cards[currentCard].image} alt="" />
						<h3>{cards[currentCard].h3}</h3>
						<p>{cards[currentCard].parafo}</p>
						<Link to={cards[currentCard].link}>
							<button>{cards[currentCard].boton}</button>
						</Link>
					</DivCampusCard>
					<Arrow onClick={nextCard}>&gt;</Arrow>
				</Arrows>
				<DivDesktop>
					<DivCampusCard>
						<img src={cancha} alt="" />
						<h3>Canchas sintética</h3>
						<p>jugá en nuestras nuevas canchas de fútbol 11 y 7 sintéticas.</p>
						<Link to="https://api.whatsapp.com/send?phone=+5493517665551&text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre...">
							<button>Reservar</button>
						</Link>
					</DivCampusCard>
					<DivCampusCard>
						<img src={arquero} alt="" />
						<h3>Esquiu Day</h3>
						<p>Pasá un día inolvidable en todas nuestras instalaciones.</p>
						<Link to="/esquiuday">
							<button>Ver más</button>
						</Link>
					</DivCampusCard>
					<DivCampusCard>
						<img src={carpa} alt="" />
						<h3>Y más...</h3>
						<p>Conocé todos nuestros servicios.</p>
						<Link to="/campus">
							<button>Ver más</button>
						</Link>
					</DivCampusCard>
				</DivDesktop>
			</DivCampus>
		</SectionCampus>
	);
}

export default CampusForHome;

//todo estilos seccion campus
const SectionCampus = styled.section`
	height: 65vh;
	background-color: #222;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: -6;

	@media (min-width: 768px) {
		height: 100vh;
	}

	h2 {
		position: relative;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #fff;
		font-size: 1.5rem;
		text-align: center;
		text-shadow: 2px 2px 4px #000000;
		top: 30px;
		margin-bottom: 10px;
		@media (min-width: 768px) {
			position: absolute;
			top: 17%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 4rem;
		}
	}
`;
const DivCampus = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		position: relative;
		top: 250px;
		left: 50%;
		transform: translate(-50%, -50%);
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 80%;
	}
`;
const DivCampusCard = styled.div`
	background-color: rgb(66, 55, 55);
	width: 50%;
	color: #fff;
	margin: 20px;
	border-radius: 20px;
	box-shadow: 2px 2px 4px #000000;
	text-align: center;
	padding: 15px;


	@media (min-width: 768px) {
		width: 20%;
		height: 390px;
	}

	img {
		margin-top: 10px;
		width: 90%;
		border-radius: 20px;
		transition: all 0.5s ease-in-out;
		height: 90px;
		object-fit: unset;
		&:hover {
			transform: scale(1.1);
			transition: all 0.5s ease-in-out;
		}

		@media (min-width: 768px) {
			height: 150px;
		}
	}

	h3 {
		margin-top: 20px;
		font-size: 1.4rem;
	}

	p {
		margin-top: 20px;
		font-size: 1rem;
	}

	button {
		background-color: #f2d608;
		color: #ffffff;
		height: 35px;
		width: 100px;
		border-radius: 20px;
		border: none;
		font-size: 1.2rem;
		font-weight: bold;
		cursor: pointer;
		box-shadow: 2px 2px 4px #000000;

		&:hover {
			background-color: #666666;
		}

		@media (min-width: 768px) {
			height: 40px;
			width: 130px;
		}
	}
`;

const Arrows = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 10px;

	@media (min-width: 768px) {
		display: none;
	}
`;

const Arrow = styled.button`
	background-color: #f2d608;
	color: #ffffff;
	height: 35px;
	width: 35px;
	border-radius: 50%;
	border: none;
	font-size: 1.2rem;
	font-weight: bold;
	cursor: pointer;
	margin: 0 10px;
	box-shadow: 2px 2px 4px #000000;

	&:hover {
		background-color: #666666;
	}
`;

const DivDesktop = styled.div`
	display: none;
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-around;
		
	}
`;
