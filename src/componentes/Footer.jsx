import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import logo from "../assets/img/logo2.webp";


function Footer() {
  return (
    <DivFooter>
      <DivImg>
        <img src={logo} alt="logo" />
      </DivImg>
      <Link to='/login'>
      <DivBoton>
        </DivBoton>
      </Link>
    </DivFooter>
  )
}

export default Footer

const DivFooter = styled.div`
  background-color: #201e1e;
  width: 100%;
  height: 6rem;
  position: absolute;
  @media(min-width: 768px){
    height: 8rem;
  }
`

const DivImg = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
   
  img{
    width: 90px;

    @media(min-width: 768px){
      width: 150px;
  }
  }

  @media(min-width: 768px){
    width: 30%;
  }
`

const DivBoton = styled.div`
  width: 20px;
  height: 20px;
  background-color: #201e1e;
  position: absolute;
  left: 0;
  bottom: 0;
`