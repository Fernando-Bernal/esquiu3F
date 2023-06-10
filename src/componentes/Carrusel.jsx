import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import estadio from "../assets/img/estadio.jpg";
import pelota from "../assets/img/carrusel.jpg";
import padel from "../assets/img/padel2.jpg";

function Carrusel() {
	const images = [ estadio, padel, pelota];
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0])

	useEffect(() =>{
	    setTimeout(() => {
	        next();
	    }, 3000);
	})

	const next = () => {
		if (selectedIndex < images.length - 1) {
            setSelectedIndex(selectedIndex + 1);
            setSelectedImage(images[selectedIndex + 1]);
        } else {
            setSelectedIndex(0);
            setSelectedImage(images[0]);
        }
    };

	return (
		<CarruselContainer>
			<CarruselImg src={selectedImage} alt="carrusel" />
		</CarruselContainer>
	);
}

export default Carrusel;

const CarruselContainer = styled.div`
	width: 100%;
	height: 200px;
    position: relative;
    overflow: hidden;
    z-index: -5;
	@media (min-width: 768px) {
		height: 400px;
	}
`;

const CarruselImg = styled.img`
	width: 100%;
	height: 200px;
    transition: all 0.6s ease-in-out;
	@media (min-width: 768px) {
		height: 400px;
	}
`;
