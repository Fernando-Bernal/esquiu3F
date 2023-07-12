import React from "react";
import Header from "./Header";
import NavbarSq3 from "./NavbarSq3";
import Torneo from "./Torneo";
import Goleadores from "./Goleadores";
import styled from "styled-components";
import ResultsLibres from "./ResultsLibres";
import FixtureLibre from "./FixtureLibre";


function ViewLibres() {
	
	return (
		<>
			<DivContainer>
				<Header />
				<NavbarSq3 />
				<H2>CATEGORIA LIBRE</H2>
				<FixtureLibre />
				<Torneo />
				<ResultsLibres />
				<Goleadores />
			</DivContainer>
		</>
	);
}

export default ViewLibres;

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