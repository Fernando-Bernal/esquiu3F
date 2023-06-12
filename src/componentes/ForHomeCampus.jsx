import React from "react";
import styled from "styled-components";
import backgroundNegro from "../assets/img/fondoNegro.webp";
import padel from "../assets/img/padel2.jpg";

function CampusForHome() {
	return (
		<SectionCampus>
			<h2>CAMPUS 3</h2>
			<DivCampus>
				<DivCampusCard>
					<img src={padel} alt="" />
					<h3>Canchas sintetica</h3>
					<p>jugá en nuestras nuevas canchas de fútbol 8 sintético.</p>
					<button>Reservar</button>
				</DivCampusCard>
				<DivCampusCard>
					<img src={padel} alt="" />
					<h3>Esquiu Day</h3>
					<p>Pasa un día inolvidable en nuestro predio.</p>
					<button>Ver más</button>
				</DivCampusCard>
				<DivCampusCard>
					<img src={padel} alt="" />
					<h3>Y más...</h3>
					<p>Conocé todos nuestros servicios.</p>
					<button>Ver más</button>
				</DivCampusCard>
			</DivCampus>
		</SectionCampus>
	);
}

export default CampusForHome;

//todo estilos seccion campus
const SectionCampus = styled.section`
	background-image: url(${backgroundNegro});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
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
		font-size: 2rem;
		text-align: center;
		text-shadow: 2px 2px 4px #000000;
		margin-bottom: -10px;
		@media (min-width: 768px) {
			position: absolute;
			top: 10%;
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
	width: 60%;
	color: #fff;
	margin: 20px;
	border-radius: 20px;
	box-shadow: 2px 2px 4px #000000;
	text-align: center;
	padding: 15px;

	@media (min-width: 768px) {
		width: 20%;
	}

	img {
		margin-top: 10px;
		width: 90%;
		border-radius: 20px;
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
		height: 40px;
		width: 130px;
		border-radius: 20px;
		border: none;
		font-size: 1.2rem;
		font-weight: bold;
		cursor: pointer;
		box-shadow: 2px 2px 4px #000000;

		&:hover {
			background-color: #666666;
		}
	}
`;
