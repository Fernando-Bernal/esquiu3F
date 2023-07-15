import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import copa from "../assets/img/copa.png";
import fotos from "../assets/img/fotos.png";
import video from "../assets/img/video.png";

function ForHomeTorneo() {
	return (
		<TorneoContainer>
			<h2>TORNEO SQ3</h2>
			<DivTorneo>
				<DivTorneoCard>
					<img src={copa} alt="copa" />
					<Link to='/torneo-libre'>
					<button>Estadísticas</button>
					</Link>
				</DivTorneoCard>
				<DivTorneoCard>
					<img src={fotos} alt="fotos" />
					<button>Fotos</button>
				</DivTorneoCard>
				<DivTorneoCard>
					<img src={video} alt="videos" />
					<button>Videos</button>
				</DivTorneoCard>
			</DivTorneo>
		</TorneoContainer>
	);
}

export default ForHomeTorneo;

//todo estilos seccion torneo

const TorneoContainer = styled.div`
	background-color: #201e1e;
	color: #fff;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;

	@media (min-width: 768px) {
		height: 70vh;
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
			top: 13%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 4rem;
		}
	}
`;

const DivTorneo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		position: relative;
		top: 165px;
		left: 50%;
		transform: translate(-50%, -50%);
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 80%;
	}
`;
const DivTorneoCard = styled.div`
	background-color: rgb(66, 55, 55);
	width: 50%;
	height: 200px;
	color: #fff;
	margin: 20px;
	border-radius: 20px;
	box-shadow: 2px 2px 4px #f2d708b0;
	text-align: center;
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	@media (min-width: 768px) {
		width: 20%;
	}

	img {
		color: #fff;
		margin-top: 10px;
		width: 45%;
	}

	button {
		background-color: #f2d608;
		color: #ffffff;
		height: 40px;
		width: 100px;
		border-radius: 20px;
		border: none;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		box-shadow: 2px 2px 4px #000000;

		&:hover {
			background-color: #666;
		}
	}
`;
