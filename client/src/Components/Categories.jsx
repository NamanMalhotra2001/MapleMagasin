import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { categories } from '../data';

const Categories = () => {
	return (
		<Wrapper>
			{categories.map((item) => (
				<Container key={item.id}>
					<Image src={item.img} />
					<Info>
						<Title>{item.title}</Title>
						<Link to={`/products/${item.cat}`}>
							<Button>SHOP NOW</Button>
						</Link>
					</Info>
				</Container>
			))}
		</Wrapper>
	);
};

export default Categories;

// ########### styled components ###########
const Button = styled.button`
	opacity: 0;
	cursor: pointer;
	font-size: 1rem;
	font-weight: bold;
	margin-top: 2rem;
	padding: 1rem;
	border-radius: 1rem;
	max-width: 20rem;
	background-color: #ddfffb;
	border: solid #ddfffb 1px;
	transition: 0.4s;

	:hover {
		margin-top: 1rem;
	}

	:focus {
		margin-top: 1rem;
		opacity: 100%;
		border: solid #008573 2px;
		background-color: #a0fff2;
	}
`;

const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	color: white;
	margin-bottom: 1.5rem;
	font-family: var(--font5);
	text-align: center;
	font-size: 3vw;
	transition: 0.5s;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Container = styled.div`
	user-select: none;
	border-radius: 1rem;
	flex: 1;
	margin: 5px;
	height: 40vw;
	position: relative;
	&:hover ${Title} {
		text-shadow: 5px 5px 5px #000000;
	}

	&:hover ${Button} {
		opacity: 100%;
	}
`;

const Wrapper = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
`;
// ########### styled components ###########
