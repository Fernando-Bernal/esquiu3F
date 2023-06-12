import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/img/logotipo-sq3-torneo.png";
import BurgerMenu from "./BurgerMenu";

function Header() {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<>
			<NavContainer>
				<h2>ESQUIU3</h2>
				<div className={`links ${clicked ? "active" : ""}`}>
					<a href="">Inicio</a>
					<a href="">Campus 3</a>
					<a href="">Torneo SQ3</a>
					<a href="">Novedades</a>
					<a href="">Quienes somos</a>
					<a href="">Contacto</a>
				</div>
				<div className="burger">
					<BurgerMenu clicked={clicked} handleClick={handleClick} />
				</div>
				<BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
			</NavContainer>
		</>
	);
}
console.log(BurgerMenu);

export default Header;

//? Estilos del NavBar

const NavContainer = styled.div`
	text-align: left;
	height: 10px;

	h2 {
		font-weight: bold;
		color: #fff;
	}
	padding: 2rem;
	background-color: #333;
	display: flex;
	justify-content: space-between;
	align-items: center;

	a {
		color: #fff;
		text-decoration: none;
		margin-left: 1rem;
	}

	.links {
		position: absolute;
		top: -700px;
		left: -2000px;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		transition: all 0.6s ease-in-out;
		a {
			color: white;
			font-size: 2rem;
			display: block;
		}
		@media (min-width: 768px) {
			position: initial;
			margin: 0;
			a {
				font-size: 1rem;
				color: #fff;
				display: inline;
			}
		}
	}
	.links.active {
		width: 100%;
		display: block;
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		top: 30%;
		left: 0;
		right: 0;
		text-align: center;

		a {
			font-size: 2rem;
			margin-top: 1rem;
			color: white;
		}
	}

	.burger {
		@media (min-width: 768px) {
			display: none;
		}
	}
`;

const BgDiv = styled.div`
	position: absolute;
	background-color: #222;
	top: -1000px;
	left: -1000px;
	width: 100%;
	height: 100%;
	z-index: -1;
	transition: all 0.6s ease-in-out;
	&.active {
		border-radius: 0 0 45% 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

//*NavBar naranja
// const ConteinerNav = styled.div`
// position: sticky;
// top: 0;
// display: flex;
// justify-content: space-between;
// align-items: center;
// padding: 0 10px;
// background-color: rgb(208 162 15);

// `
// const linkStyle = {
// 	textDecoration: "none",
// 	color: "white",
// 	display: "flex",
// 	alignItems: "center",
// 	justifyContent: "space-around",
// 	width: "150px"
// };

// const linkStyleA = {

//     textDecoration: "none",
//     fontSize: "17px",
//     color: "rgb(255, 255, 255)"
// };

// const Logo = styled.img`
// width: 70px;

// `

// const ButtonsDiv = styled.div`
// display: flex;
// gap: 70px;
// margin-right: 100px;
// `

// function Header() {
//   return (
//     <ConteinerNav>
//       <Link to="/" style={linkStyle}>
//         <Logo src={logo} alt="logo" />
//         <h4>Inicio</h4>
//       </Link>
//       <ButtonsDiv>
//       <Link to="/campus3" style={linkStyleA}>
//         <h4>Campus 3</h4>
//       </Link>
//       <Link to="/torneos" style={linkStyleA}>
//         <h4>Torneo SQ3</h4>
//       </Link>
//       <Link to="/novedades" style={linkStyleA}>
//         <h4>Novedades</h4>
//       </Link>
//       <Link to="/nosotros" style={linkStyleA}>
//         <h4>Quiénes somos</h4>
//       </Link>
//       <Link to="/contacto" style={linkStyleA}>
//         <h4>Contacto</h4>
//       </Link>
//       </ButtonsDiv>
//     </ConteinerNav>
//   )
// }

// export default Header
