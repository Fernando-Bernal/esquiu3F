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
		dispatch(getNoticias());
	}, []);

	console.log(noticias);
	return (
		<Container>
			<Header />
			<h1>Novedades</h1>
			<Section>
				{noticias?.length > 0 &&
					noticias.map((noticia) => {
						return <NovedadesCards noticia={noticia} />;
					})}
			</Section>
			<Footer />
		</Container>
	);
}

export default Novedades;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: #f5f5f5;
	width: 100%;
    position: absolute;
    z-index: -2;

    h1 {
        text-align: center;
        margin: 1rem 0;
        position: relative;
        z-index: -3;
    }
	@media (min-width: 768px) {
		width: 100%;
	}
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    position: relative;
    z-index: -10;
    background-color: #ebebeb;
    min-height: 100vh;
    padding: 50px;
    @media(min-width: 768px){
        
    }
`;
