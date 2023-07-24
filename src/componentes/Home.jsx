import React from 'react'
import Header from './Header'
import Carrusel from './Carrusel'
import CampusForHome from './ForHomeCampus'
import ForHomeTorneo from './ForHomeTorneo'
import styled from 'styled-components'
import ForHomeSponsor from './ForHomeSponsor'
import ForHomeContacto from './ForHomeContacto'
import Footer from './Footer'
function Home() {
  return (
    <DivGral>
        <Header />
        <Carrusel />
        <ForHomeTorneo />
        <CampusForHome />
        <ForHomeSponsor />
        <ForHomeContacto />
        <Footer />
    </DivGral>
  )
}

export default Home


const DivGral = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`