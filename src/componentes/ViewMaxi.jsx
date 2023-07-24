import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import NavbarSq3 from './NavbarSq3'
import TorneoMaxi from './TorneoMaxi'
import FixtureMaxi from './FixtureMaxi'
import ResultsMaxi from './ResultsMaxi'
import GoleadoresMaxi from './GoleadoresMaxi'

function ViewMaxi() {
  return (
    <>
        <DivContainer>
            <Header />
            <NavbarSq3 />
            <H2>CATEGORIA MAXI</H2>
            <FixtureMaxi />
            <TorneoMaxi />
            <ResultsMaxi />
            <GoleadoresMaxi />
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
	color: #fff;
	font-size: 1.5rem;
	text-align: center;
	margin-top: 1rem;
	margin-bottom: 1.7rem;
	z-index: -5;
	position: relative;
	font-weight: 700;
	text-decoration: underline;
`;