import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import logo from "../assets/logotipo-sq3-torneo.png"

const ConteinerNav = styled.div`
position: sticky;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 10px;    
background-color: rgb(208 162 15);

`
const linkStyle = {
	textDecoration: "none",
	color: "white",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-around",
	width: "150px"	
};

const linkStyleA = {
	  
    textDecoration: "none",
    fontSize: "17px",
    color: "rgb(255, 255, 255)"
};

const Logo = styled.img`
width: 70px;

`

const ButtonsDiv = styled.div`
display: flex;
gap: 70px;
margin-right: 100px;
`

function Header() {
  return (
    <ConteinerNav>
      <Link to="/" style={linkStyle}>
        <Logo src={logo} alt="logo" />
        <h4>Inicio</h4>
      </Link>
      <ButtonsDiv>
      <Link to="/campus3" style={linkStyleA}>
        <h4>Campus 3</h4>
      </Link>
      <Link to="/torneos" style={linkStyleA}>
        <h4>Torneo SQ3</h4>
      </Link>
      <Link to="/novedades" style={linkStyleA}>
        <h4>Novedades</h4>
      </Link>
      <Link to="/nosotros" style={linkStyleA}>
        <h4>Quiénes somos</h4>
      </Link>
      <Link to="/contacto" style={linkStyleA}>
        <h4>Contacto</h4>
      </Link>
      </ButtonsDiv>
    </ConteinerNav>
  )
}

export default Header