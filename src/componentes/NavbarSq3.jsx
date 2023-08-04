import React from "react";
import styled from "styled-components";
import DropdownCategory from "./DropdownCategory";

function NavbarSq3() {
	return (
		<DivContainer>
			<DivButtons>
				<DropdownCategory />
				<a href="">SANCIONES</a>
				<a href="/reglamento">REGLAMENTO</a>
			</DivButtons>
		</DivContainer>
	);
}

export default NavbarSq3;

const DivContainer = styled.div`
	position: relative;
	z-index: -3;
	background-color: #d08c1e;
	width: 100%;
	height: 45px;
	margin-bottom: 50px;
	border-top: 5px solid #ffbc5076;
	border-bottom: 5px solid #a16709;
`;

const DivButtons = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 100%;

	a {
		text-decoration: none;
		color: white;
		font-size: 0.8rem;
		font-weight: 500;

		@media (min-width: 768px) {
			font-size: 1rem;
		}
	}
`;
