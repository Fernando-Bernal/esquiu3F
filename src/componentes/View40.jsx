import React from "react";
import Header from "./Header";
import NavbarSq3 from "./NavbarSq3";
import styled from "styled-components";
import Torneo40 from "./Torneo40";
import Fixture40 from "./Fixture40";
import Goleadores40 from "./Goleadores40";
import Results40 from "./Results40";

function View40() {
  return (
    <>
        <DivContainer>
            <Header />
            <NavbarSq3 />
            <H2>CATEGORIA +40</H2>
            <Fixture40 />
            <Torneo40 />
            <Results40 />
            <Goleadores40 />
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
	color: #fff;
	font-size: 1.5rem;
	text-align: center;
	margin-top: 1rem;
	margin-bottom: 1.7rem;
	z-index: -5;
	position: relative;
	font-weight: 700;
	text-decoration: underline;
`;