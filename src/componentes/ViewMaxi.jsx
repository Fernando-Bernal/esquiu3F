import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import NavbarSq3 from './NavbarSq3'
import TorneoMaxi from './TorneoMaxi'
import FixtureMaxi from './FixtureMaxi'
import ResultsMaxi from './ResultsMaxi'
import GoleadoresMaxi from './GoleadoresMaxi'
import Footer from "./Footer";
import CopasMaxi from './CopasMaxi';
import ResultCopaMaxi from './ResultCopaMaxi'

function ViewMaxi() {
  return (
    <>
        <DivContainer>
            <Header />
            <NavbarSq3 />
            <H2>CATEGORÍA MAXI</H2>
            <FixtureMaxi />
            <TorneoMaxi />
			<CopasMaxi />
            <ResultsMaxi />
			<ResultCopaMaxi />
            <GoleadoresMaxi />
			<Footer />
        </DivContainer>
    </>
  )
}

export default ViewMaxi

const DivContainer = styled.div`
	background-color: rgb(43, 38, 38);
	width: 100%;
	height: 100vh;
	min-height: 100%;
	overflow-y: auto;
	position: absolute;
	z-index: -5;
`;


const H2 = styled.h2`
	color: #ffbc50;
	font-size: 1.5rem;
	text-align: center;
	margin-top: 1rem;
	margin-bottom: 1.7rem;
	z-index: -5;
	position: relative;
	font-weight: 700;
`;