import React from 'react'
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

function Sansiones() {
  return (
    <Container>
        <Header />
        <h1>SANCIONES</h1>
        <Footer />
    </Container>
  )
}

export default Sansiones

const Container = styled.div`
	background-color: #ebebeb;
	width: 100%;	
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: -2;
    min-height: 100vh;
	
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