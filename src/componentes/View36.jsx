import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import NavbarSq3 from './NavbarSq3'
import Torneo36 from './Torneo36'
import Fixture36 from './Fixture36'
import Goleadores36 from './Goleadores36'
import Results36 from './Results36'
import Footer from "./Footer";


function View36() {
  return (
    <>
        <DivContainer>
            <Header />
            <NavbarSq3 />
            <H2>CATEGORÍA +36</H2>
            <Fixture36 />
            <Torneo36 />
            <Results36 />
            <Goleadores36 />
			<Footer />
        </DivContainer>
    </>
  )
}

export default View36

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