import React from 'react'
import styled from "styled-components";
import telefono from "../assets/img/telefono.svg";


function ForHomeContacto() {
  return (
    <DivContainer>
        <DivContacto>
            <DivItems>
                <p>Noticias</p>
                <img src={telefono} alt="" />
            </DivItems>
            <DivItems>
                <p>Telefono</p>
                <img src={telefono} alt="" />
            </DivItems>
            <DivItems>
                <p>Buzon de sugerencias</p>
                <img src={telefono} alt="" />
            </DivItems>
        </DivContacto>
    </DivContainer>
  )
}

export default ForHomeContacto

const DivContainer = styled.div`
    background-color: #333;
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

`

const DivItems = styled.div`
    background-color: #555;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 10px;

    p{
        color: #fff;
        font-size: 0.8rem;
        font-weight: bold;
        margin-bottom: 10px;
        margin-top: 0px;
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