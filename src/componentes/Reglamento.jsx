import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import reglamento from '../assets/texto/reglamento.pdf'


function Reglamento() {

    const docs = [
        { uri: reglamento,
            fileType: "pdf",
            fileName: "reglamento2023.pdf"
        }, // Local File
      ]

      
	return (
		<div>
			<Header />
			<DivText>
            <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} 
            style={{height:1000}}
            />
			
			</DivText>
			<Footer />
		</div>
	);
}

export default Reglamento;


const DivText = styled.div`
    margin: 0 auto;
    width: 80%;
    text-align: justify;
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    padding: 2rem;
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
