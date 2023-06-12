import React from 'react'
import Header from './Header'
import Carrusel from './Carrusel'
import styled from 'styled-components'
import backgroundNegro from '../assets/img/fondoNegro.webp'

function Home() {
  return (
    <div>
        <Header />
        <Carrusel />
        <SectionCampus>
          <h1>CAMPUS 3</h1>
          <DivCampus>

          </DivCampus>
        </SectionCampus>
    </div>
  )
}

export default Home


//todo estilos seccion campus
const SectionCampus = styled.section`
  background-image: url(${backgroundNegro});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: -6;

  h1 {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 2rem;
    text-align: center;
    text-shadow: 2px 2px 4px #000000;
    @media(min-width: 768px){
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`
const DivCampus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
