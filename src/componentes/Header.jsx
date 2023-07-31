import React, { useState } from "react";
import styled from "styled-components";
import DropdownCampus3 from "./DropdownCampus3";
import logo from "../assets/img/logo2.webp";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
	const [clicked, setClicked] = useState(false);
	const user = useSelector((state) => state.reducerU.user);
	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<>
			<NavContainer>
				<Link to="/">
				<img src={logo} alt="logo" />
				</Link>					
				<div className={`links ${clicked ? "active" : ""}`}>
					{user ? <a className="ahedear" href="/admin-torneo">Administrar</a> : ""}
					<a className="ahedear" href="/">Inicio</a>
					<a className="ahedear" href="/torneo-libre">Torneo SQ3</a>
					<DropdownCampus3 className="ahedear" />
					<a className="ahedear" href="/novedades">Novedades</a>
					<a className="ahedear" href="">Quienes somos</a>
					<a className="ahedear" href="">Contacto</a>
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
	position: static;
	text-align: left;
	display: flex;
	height: 10px;
	padding: 2rem;
	background-color: #333;
	justify-content: space-between;
	align-items: center;

	img {
		height: 55px;
		
	}

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
		text-align: left;
		transition: all 0.6s ease-in-out;
		
		a {
			color: white;
			display: block;
		}
		@media (min-width: 768px) {
			position: initial;
			margin: 0;
			display: inline-flex;
			justify-content: space-between;
			align-items: center;
			width: 55%;

			a {
				font-size: 1.1rem;
				color: #fff;
				display: inline;
				transition: all 0.6s ease-in-out;
			}
			.ahedear:hover {
				color: #d0a20f;
				font-size: 1.2rem;
				transition: all 0.6s ease-in-out;
				transform: skew(-20deg);
			}
		}
	}
	.links.active {
		display: block;
		position: absolute;
		margin-right: auto;
		top: 15%;
		left: 0;
		right: 0;
		text-align: left;
        margin-left: 25px;

		a {
			font-size: 1.5rem;
			margin-top: 1rem;
			color: #ffffff;
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
	top: -3000px;
	left: -3000px;
	width: 100%;
	height: 100%;
	z-index: -1;
	transition: all 0.6s ease-in-out;
	&.active {
		border-radius: 0 0 45% 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 76%;
	}
`;

