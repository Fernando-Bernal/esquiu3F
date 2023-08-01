import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import telefono from "../assets/img/whatsapp.png";
import buzon from "../assets/img/buzon.png";
import novedades from "../assets/img/novedades.png";


function ForHomeContacto() {
  return (
    <DivContainer>
        <DivContacto>
            <DivItems>
                <Link to='/novedades'>
                <p>Noticias</p>
                <img src={novedades} alt="" />
                </Link>
            </DivItems>
            <DivItems>
                <Link target="_blank" to="https://api.whatsapp.com/send?phone=+5493517665551&text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre...">
                <p>Telefono</p>
                <img src={telefono} alt="" />
                </Link>
            </DivItems>
            <DivItems>
                <Link target='_blank' to="https://docs.google.com/forms/d/e/1FAIpQLSd6mYLB91CHYVOLuK_cpYNydBwnpRFfdP9zuzjtZkLbsG-akw/viewform">
                <p>Buzon de sugerencias</p>
                <img src={buzon} alt="" />
                </Link>
            </DivItems>
        </DivContacto>
    </DivContainer>
  )
}

export default ForHomeContacto

const DivContainer = styled.div`
    background-color: #222;
    height: 30vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DivContacto = styled.div`
    background-color: #555;
    height: 15vh;  
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 2px 2px 4px #f2d708b0;

    @media(min-width: 768px){
        width: 50%;
    }

`

const DivItems = styled.div`
    background-color: #555;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 10px;

    a{
        text-decoration: none;
    }
    p{
        color: #fff;
        font-size: 0.8rem;
        font-weight: bold;
        margin-bottom: 10px;
        margin-top: 0px;
        text-decoration: none;
        @media (min-width: 768px) {
            font-size: 1rem;
        }    
    }

    img{
        width: 20px;
        height: 20px;

        @media (min-width: 768px) {
            width: 45px;
            height: 45px;
        }
    }
`