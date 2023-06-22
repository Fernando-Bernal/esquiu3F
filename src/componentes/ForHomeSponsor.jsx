import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import branca from "../assets/img/branca.webp";
import schneider from "../assets/img/schneider.webp";
import libra from "../assets/img/libra.webp";

const logos = [branca, schneider, libra, branca, schneider, libra, branca, schneider, libra];

function ForHomeSponsor() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState("right");
	// const visibleLogos = getVisibleLogos();

	useEffect(() => {
		const timer = setInterval(() => {
			moveCarousel("right");
		}, 3000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	// const moveCarousel = (newDirection) => {
	// 	setDirection(newDirection);

	// 	setTimeout(() => {
	// 		if (newDirection === "right") {
	// 			setCurrentIndex((prevIndex) =>
	// 				prevIndex === logos.length - 1 ? 0 : prevIndex + 1
	// 			);
	// 		} else if( newDirection === "left") {
	// 			setCurrentIndex((prevIndex) =>
	// 				prevIndex === 0 ? logos.length - 1 : prevIndex - 1
	// 			);
	// 		}
	// 	}, 500);
	// };

	const moveCarousel = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === logos.length - 1 ? 0 : prevIndex + 1
		);
	};

	function getVisibleLogos() {
		const lastIndex = currentIndex + 2;

		if (lastIndex >= logos.length) {
			const overflow = lastIndex - logos.length;
			return [...logos.slice(currentIndex), ...logos.slice(0, overflow + 1)];
		}

		return logos.slice(currentIndex, lastIndex + 1);
	}

	return (
		<>
			<Title>
				<h2>NOS ACOMPAÑAN</h2>
				<ComponentContainer>
					<CarouselContainer>
						<CarouselWrapper direction={direction}>
							{logos.map((logo, index) => (
								<LogoImage key={index} src={logo} alt={`Logo ${index + 1}`} />
							))}
						</CarouselWrapper>
					</CarouselContainer>
					{/* <ArrowButton onClick={() => moveCarousel("left")}>&lt;</ArrowButton>
				<ArrowButton onClick={() => moveCarousel("right")}>&gt;</ArrowButton> */}
				</ComponentContainer>
			</Title>
		</>
	);
}

export default ForHomeSponsor;

const Title = styled.div`
	background-color: #222;
	color: #fff;
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 35vh;

	@media (min-width: 768px) {
		height: 65vh;
	}

	h2 {
		position: relative;
		margin-top: 8%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #fff;
		font-size: 1.5rem;
		text-align: center;
		text-shadow: 2px 2px 4px #000000;
		margin-bottom: -10px;
		@media (min-width: 768px) {
			font-size: 4rem;
			position: relative;
			top: -5%;
		}
	}
`;

const ComponentContainer = styled.div`
	width: 100%;
	height: 50%;
	background-color: #222;
	position: relative;
	top: 30px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CarouselContainer = styled.div`
	width: 70%;
	background-color: #222;
	margin: 0 auto;
	overflow: hidden;
	position: relative;

	@media( min-width: 768px){
		width: 50%;
	}
`;

const carouselAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const CarouselWrapper = styled.div`
	display: flex;
	animation: ${carouselAnimation} 10s linear infinite;
	transform: translateX(0);
	transition: transform 0.5s ease-in-out;
	transform: ${(props) => `translateX(-${props.currentIndex * 100}%)`};
`;

const LogoImage = styled.img`
	max-width: 100px;
	height: auto;
	margin: 0 auto;
	border-radius: 50%;
	padding: 0.5rem;

    @media (min-width: 768px) {
        max-width: 200px;
    }
`;

const ArrowButton = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background-color: transparent;
	border: none;
	font-size: 30px;
	color: #e8e8e8;
	cursor: pointer;

	&:first-of-type {
		left: 80px;
	}

	&:last-of-type {
		right: 80px;
	}
`;
