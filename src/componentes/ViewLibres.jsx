import React from "react";
import Header from "./Header";
import Torneo from "./Torneo";
import Goleadores from "./Goleadores";
import styled from "styled-components";

function ViewLibres() {
	return (
		<>
			<DivContainer>
				<Header />
				<Torneo />
				<Goleadores />
			</DivContainer>
		</>
	);
}

export default ViewLibres;

const DivContainer = styled.div`
	background-color: rgb(181, 181, 181);
	width: 100%;
	height: 100vh;
	min-height: 100%;
	overflow-y: auto;
	position: absolute;
	z-index: -5;
`;
