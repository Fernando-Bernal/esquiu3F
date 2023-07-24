import React from "react";
import Header from "./Header";
import NavbarSq3 from "./NavbarSq3";
import styled from "styled-components";
import Torneo30 from "./Torneo30";
import Goleadores30 from "./Goleadores30";
import Fixture30 from "./Fixture30";
import Results30 from "./Results30";
import Footer from "./Footer";


function View30() {
  return (
    <>
    <DivContainer>
        <Header />
        <NavbarSq3 />
        <H2>CATEGORIA +30</H2>
		<Fixture30 />
        <Torneo30 />
		<Results30 />
        <Goleadores30 />
		<Footer />
    </DivContainer>
</>
  )
}

export default View30


const DivContainer = styled.div`
	background-color: rgb(43, 38, 38);
	width: 100%;
	height: 100vh;
	min-height: 100%;
	overflow-y: auto;
	position: absolute;
	z-index: -5;
`;

const H2 = styled.h2`
	color: #ffbc50;
	font-size: 1.5rem;
	text-align: center;
	margin-top: 1rem;
	margin-bottom: 1.7rem;
	z-index: -5;
	position: relative;
	font-weight: 700;
`;