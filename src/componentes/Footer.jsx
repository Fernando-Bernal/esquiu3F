import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/logo2.webp";
import facebook from "../assets/img/face logo.png";
import instagram from "../assets/img/IG LOGO.png";

function Footer() {
	return (
		<DivFooter>
			<DivImg>
				<img src={logo} alt="logo" />
			</DivImg>
			<Link to="/login">
				<DivBoton></DivBoton>
			</Link>
      <DivMedia>
        <Link target="_blank" to="https://www.instagram.com/esquiu3/">
          <img src={instagram} alt="Instagram" />
        </Link>
        <Link target="_blank" to="https://www.facebook.com/esquiu3/?locale=es_LA">
          <img src={facebook} alt="Facebook" />
        </Link>
      </DivMedia>
		</DivFooter>
	);
}

export default Footer;

const DivFooter = styled.div`
	background-color: #201e1e;
	width: 100%;
	height: 7rem;
	margin-top: auto;
	position: relative;
   
	@media (min-width: 768px) {
		height: 8rem;
	}
`;

const DivImg = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
  
  @media (min-width: 768px) {
    width: 30%;
  }

	img {
		width: 90px;
    position: relative;
    bottom: 15px;

		@media (min-width: 768px) {
			width: 150px;
      bottom: 0;
		}
	}

`;

const DivBoton = styled.div`
	width: 20px;
	height: 20px;
	background-color: #201e1e;
	position: absolute;
	top: 0;
	left: 0;
`;


const DivMedia = styled.div`
 
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 0);
  bottom: 10px;

  @media (min-width: 768px) {
    right: 5%;
    bottom: 50%;
    transform: translate(0, 50%);
  }

  img {
    width: 20px;
    height: 20px;
    margin: 0 10px;

    @media (min-width: 768px) {
      width: 35px;
      height: 35px;
  }

}


`