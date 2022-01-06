import React from 'react';
import styled from 'styled-components';

// icons
import { BiCart, BiSearchAlt } from 'react-icons/bi';
import maple from '../Pictures/maple-leaf.png';

const NavBar = () => {
	return (
		<Wrapper>
			<Left>
				<SearchContainer>
					<BiSearchAlt className='icon' />
					<input placeholder='Search store' />
				</SearchContainer>
			</Left>
			<Logo>
				<img src={maple} alt='maple' className='logoImage' />
				MapelMagasin
			</Logo>
			<Right>
				<Button>SignIn</Button>
				<Button>
					<BiCart className='icon' />
					<Badge />
				</Button>
			</Right>
		</Wrapper>
	);
};

export default NavBar;

// ########### styled components ###########
export const Wrapper = styled.div`
	background: rgb(0, 31, 38);
	background: linear-gradient(
		331deg,
		rgba(0, 31, 38, 1) 26%,
		rgba(0, 17, 21, 1) 36%,
		rgba(0, 8, 11, 1) 44%,
		rgba(0, 0, 1, 1) 51%,
		rgba(27, 19, 35, 1) 78%,
		rgba(48, 34, 61, 1) 100%
	);
	color: white;
	height: 7vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.3rem 1.5rem;
	user-select: none;

	.icon {
		color: black;
		font-size: 1.5rem;
	}
`;

export const Left = styled.div`
	flex: 1;
	display: flex;
	justify-content: left;
`;

export const Logo = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: var(--font1);
	font-size: clamp(2vw, 3vw, 3rem);
	color: white;

	.logoImage {
		object-fit: cover;
		width: clamp(1vw, 2vw, 3vw);
		margin-right: 5px;
	}
`;

export const Right = styled.div`
	display: flex;
	justify-content: right;
	align-items: center;
	flex: 1;
`;

export const SearchContainer = styled.div`
	width: 15rem;
	height: 2.6rem;
	background-color: white;
	border-radius: 2rem;
	display: flex;
	align-items: center;
	position: relative;
	padding: 1rem;
	transition: 0.2s;

	:focus-within {
		border-radius: 1rem;
		width: 25rem;
	}

	.icon {
		color: black;
		position: absolute;
		left: 10px;
		font-size: 1.5rem;
	}

	input {
		position: absolute;
		left: 1px;
		background: transparent;
		border: none;
		outline: none;
		padding-left: 3rem;
		padding-right: 15px;
		width: 100%;
		height: 100%;
		font-size: 0.9rem;
	}
`;

export const Button = styled.button`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 5px;
	padding: 5px 10px;
	margin: 0 5px;
	font-size: 1.2rem;
	background-color: lightgray;

	:focus {
		background-color: darkgray;
	}
`;

export const Badge = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	width: 13px;
	height: 13px;
	margin-left: 5px;
	font-size: 1px;
	background-color: #ff0000a6;
`;
// ########### styled components ###########
