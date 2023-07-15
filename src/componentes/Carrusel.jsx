import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import banner1 from "../assets/img/sq3banner1.jpg";
import banner3 from "../assets/img/sq3banner3.jpg";
import banner4 from "../assets/img/sq3banner4.jpg";
import banner5 from "../assets/img/sq3banner5.jpg";


function Carrusel() {
	const images = [banner1, banner3, banner4, banner5];
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectedImage, setSelectedImage] = useState(images[0]);

	useEffect(() => {
		setTimeout(() => {
			next();
		}, 3000);
	});

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
			<Text>
				<span>BIENVENIDOS A</span>
				<p>SQ3</p>
				<span>MÁS QUE FÚTBOL</span>
			</Text>
			<Opacity />
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
	z-index: -4;
	@media (min-width: 768px) {
		height: 650px;
	}
`;
const Opacity = styled.div`
	width: 100%;
	height: 200px;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 0;
	@media (min-width: 768px) {
		height: 650px;
	}
`;

const CarruselImg = styled.img`
	width: 100%;
	height: 200px;
	transition: all 0.6s ease-in-out;
	object-fit: cover;
		
	@media (min-width: 768px) {
		height: 650px;	
	}
`;

const Text = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-weight: bold;
	font-size: 1rem;
	color: white;
	text-shadow: 2px 2px 4px #000000;
	z-index: 1;
    
    p{
        font-size: 2rem;
        margin: 1rem;
    }
    @media (min-width: 768px) {
        font-size: 2rem;
        p{
            font-size: 4rem;
        }
    }
`;
