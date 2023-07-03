import React from "react";
import Header from "./Header";
import NavbarSq3 from "./NavbarSq3";
import Torneo from "./Torneo";
import Goleadores from "./Goleadores";
import styled from "styled-components";


function ViewLibres() {
	return (
		<>
			<DivContainer>
				<Header />
				<NavbarSq3 />
				<Torneo />
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
