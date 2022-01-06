import React, { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import styled from 'styled-components';
import { sliderItems } from '../data';

function Slider() {
	const [slideIndex, setSlideIndex] = useState(0);

	function handleArrowClick(direction) {
		if (direction === 'left') {
			console.log('left');
			if (slideIndex === 0) {
				setSlideIndex(sliderItems.length - 1);
			} else {
				setSlideIndex((prev) => prev - 1);
			}
		} else {
			console.log('right');
			if (slideIndex === sliderItems.length - 1) {
				setSlideIndex(0);
			} else {
				setSlideIndex((prev) => prev + 1);
			}
		}
	}

	return (
		<Wrapper>
			<Arrow
				className='left'
				onClick={() => handleArrowClick('left')}
			>
				<BiLeftArrowAlt />
			</Arrow>

			<Arrow
				className='right'
				onClick={() => handleArrowClick('right')}
			>
				<BiRightArrowAlt />
			</Arrow>

			{sliderItems.map((item, i) => (
				<Slide key={i} translate={slideIndex}>
					<Image src={item.img} alt='banner-image' />
					<DescriptionContainer>
						<Heading>{item.title}</Heading>
						<Description>{item.desc}</Description>
						<Button>Shop Now</Button>
					</DescriptionContainer>
				</Slide>
			))}
		</Wrapper>
	);
}

export default Slider;

// ########## styled components ##########
const Button = styled.button`
	cursor: pointer;
	font-size: 1.6rem;
	margin-top: 2rem;
	padding: 1rem;
	border-radius: 1rem;
	max-width: 20rem;
	background-color: #a0fff2;
	border: solid #a0fff2 1px;
	transition: 0.3s;

	:hover {
		background-color: #68ffeb;
		border: solid #008573 1px;
	}

	:focus {
		opacity: 40%;
	}
`;

const Description = styled.div`
	margin-top: 1rem;
	font-size: 1.6rem;
`;

const Heading = styled.h1`
	font-size: 5rem;
	font-family: var(--font5);
`;

const DescriptionContainer = styled.div`
	padding-left: 2rem;
	padding-right: 6rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Image = styled.img`
	width: 46%;
	object-fit: contain;
`;

const Slide = styled.div`
	transition: all 0.4s ease-out;
	transform: translate(${(props) => props.translate * -100}%);
	height: 40vw;
	display: flex;
	background: rgb(241, 255, 255);
	background: linear-gradient(
		173deg,
		rgba(241, 255, 255, 1) 0%,
		rgba(253, 235, 205, 1) 100%
	);

	@media only screen and (max-width: 800px) {
		flex-direction: column;
	}
`;

const Arrow = styled.div`
	position: absolute;
	z-index: 1;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	height: fit-content;
	border-radius: 2rem;
	font-size: 3rem;
	background-color: gray;
	opacity: 40%;
	transition: 0.2s;

	:hover {
		opacity: 100%;
		color: white;
		background-color: black;
	}
`;

const Wrapper = styled.div`
	user-select: none;
	width: 100%;
	overflow: hidden;
	position: relative;
	display: grid;
	grid-template-columns: 100% 100% 100%;

	.left {
		left: 1rem;
		top: 45%;
	}

	.right {
		right: 1rem;
		top: 45%;
	}
`;
// ########## styled components ##########
