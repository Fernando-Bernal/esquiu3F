import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getNoticias } from "../redux/actions";
import NovedadesCards from "./NovedadesCards";
import Header from "./Header";
import Footer from "./Footer";

function Novedades() {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.reducerU.user);
	const noticias = useSelector((state) => state.reducerU.noticias);

	useEffect(() => {
		if(noticias?.length === 0){
			dispatch(getNoticias())
		}
	}, []);


	console.log(noticias);
	return (
		<Container>
			<Header />
				<h1>NOVEDADES</h1>
			<Section>
				{noticias?.length > 0 &&
					noticias.map((noticia) => {
						return  <NovedadesCards noticia={noticia} />;
					})}
			</Section>
			<Footer />
		</Container>
	);
}

export default Novedades;

const Container = styled.div`
	background-color: #ebebeb;
	width: 100%;	
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: -2;
	
	h1{
		text-align: center;
		margin-top: 20px;
		position: relative;
		z-index: -4;
	}

	@media (min-width: 768px) {
		width: 100%;
	}
`;

const Section = styled.section`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	position: relative;
	z-index: -10;
	background-color: #ebebeb;
	min-height: 100vh;
	margin: 20px auto;

	@media (min-width: 768px) {
	}
`;
