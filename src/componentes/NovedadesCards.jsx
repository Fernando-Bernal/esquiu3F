import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NovedadesCards({ noticia }) {
	console.log(noticia);
	return (
		<Container>
			<DivImg>
				<img src={noticia.imageUrl} alt="img" />
			</DivImg>
			<DivText>
				<div>
					<h3>{noticia.title}</h3>
				</div>
				<div>
					<p>Leer mas.</p>
				</div>
			</DivText>
		</Container>
	);
}

export default NovedadesCards;

const Container = styled.div`
	width: 90%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	position: relative;
	z-index: -10;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 60%;
		margin-top: 15px;
		height: 200px;
	}
	`;

const DivImg = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	object-fit: contain;
	
	@media (min-width: 768px) {
		width: 35%;
		padding: 0 1rem;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
	}
`;

const DivText = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	margin: 0 auto;
	padding: 0 1rem;
	@media (min-width: 768px) {
		width: 70%;
		height: 200px;
		
	}


`;
