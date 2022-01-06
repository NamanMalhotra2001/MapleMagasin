import styled from 'styled-components';
import { popularProducts } from '../data';

// Icons
import { BsCartPlus, BsHeart, BsInfoCircle } from 'react-icons/bs';

const Products = () => {
	return (
		<Wrapper>
			{popularProducts.map((item) => (
				<Container key={item.id}>
					<Circle />
					<Image src={item.img} />
					<Info>
						<Icon>
							<BsCartPlus />
						</Icon>
						<Icon>
							<BsInfoCircle />
						</Icon>
						<Icon>
							<BsHeart />
						</Icon>
					</Info>
				</Container>
			))}
		</Wrapper>
	);
};

export default Products;

// ########### styled components ###########
const Info = styled.div`
	border-radius: 1rem;
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
`;

const Container = styled.div`
	user-select: none;
	border-radius: 1rem;
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #e9f9ff;
	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
`;

const Circle = styled.div`
	width: 15rem;
	height: 15rem;
	border-radius: 50%;
	background-color: white;
	position: absolute;
`;

const Image = styled.img`
	height: 75%;
	z-index: 2;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.2s ease;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.2);
	}
`;

const Wrapper = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
// ########### styled components ###########
