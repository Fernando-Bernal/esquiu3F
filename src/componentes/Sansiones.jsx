import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import sanciones from '../assets/texto/BOLETIN N°1 CLAUSURA.pdf'

function Sansiones() {

    const docs = [
        { uri: sanciones,
            fileType: "pdf",
            fileName: "reglamento2023.pdf"
        }, // Local File
      ]

  return (
    <Container>
        <Header />
        <DivText>
            <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} 
            
            />
			
			</DivText>
        <Footer />
    </Container>
  )
}

export default Sansiones

const Container = styled.div`
	background-color: #ebebeb;
	width: 100%;	
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: -2;
    min-height: 100vh;
	
	h1{
		text-align: center;
		margin-top: 20px;
		position: relative;
		z-index: -4;
	}

	@media (min-width: 768px) {
		width: 100%;
	}
`;

const DivText = styled.div`
    margin: 0 auto;
    width: 80%;
    text-align: justify;
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    padding: 2rem;
    position: relative;
    z-index: -5;
    @media (max-width: 768px) {
        width: 100%;
        padding: 1rem;
    }
    @media (max-width: 425px) {
        font-size: 1rem;
    }
    @media (max-width: 320px) {
        font-size: 0.8rem;
    }
`

const H2 = styled.h2`   
    text-align: center;
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    padding: 2rem;
    @media (max-width: 768px) {
        font-size: 1.5rem;
        padding: 1rem;
    }
    @media (max-width: 425px) {
        font-size: 1.2rem;
    }
    @media (max-width: 320px) {
        font-size: 1rem;
    }
`
