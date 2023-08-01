import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNoticiaDetail, clearNoticiaDetil } from "../redux/actions";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

function NovedadesDetalle() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const novedades = useSelector((state) => state.reducerU.noticiaDetail);

	useEffect(() => {
		dispatch(getNoticiaDetail(id));
		return () => {
			dispatch(clearNoticiaDetil());
		};
	}, [dispatch]);

	const handleClick = () => {
        window.history.back();
    }

	return (
		<Container>
			<Header />
			{novedades && (
				<>
					<h1>{novedades[0].title}</h1>
					<Section>
						<p>{novedades[0].text}</p>
                        <Btn onClick={() =>{handleClick()}}>Volver</Btn>
					</Section>
				</>
			)}
			<Footer />
		</Container>
	);
}

export default NovedadesDetalle;

const Container = styled.div`
	background-color: #ebebeb;
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: -2;

	h1 {
		text-align: center;
		margin-top: 20px;
		position: relative;
		z-index: -4;
		font-weight: bold;
		font-size: 1.5rem;
	}

	@media (min-width: 768px) {
		width: 100%;
		
	}
`;

const Section = styled.section`
	width: 80%;
	margin: 20px auto;
	text-align: left;
	padding: 20px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    position: relative;
    z-index: -4;

	p {
		font-size: 1rem;
	}
`;


const Btn = styled.button`
        width: 75px;
    height: 40px;
    border-radius: 9%;
    border: none;
    background-color: rgb(242 155 20);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
	color: #fff;
`