import React from "react";
import Header from "./Header";
import NavbarSq3 from "./NavbarSq3";
import styled from "styled-components";
import Torneo40 from "./Torneo40";
import Fixture40 from "./Fixture40";
import Goleadores40 from "./Goleadores40";
import Results40 from "./Results40";
import Footer from "./Footer";
import Copas40 from "./Copas40";
import ResultCopa40 from "./ResultCopa40";


function View40() {
  return (
    <>
        <DivContainer>
            <Header />
            <NavbarSq3 />
            <H2>CATEGORÍA +40</H2>
            <Fixture40 />
            <Torneo40 />
			<Copas40 />
            <Results40 />
			<ResultCopa40 />
            <Goleadores40 />
			<Footer />
        </DivContainer>
    </>
  )
}

export default View40

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