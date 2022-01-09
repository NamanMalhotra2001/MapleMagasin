import styled from 'styled-components';
import axios from 'axios';

// Icons
import { BsCartPlus, BsHeart, BsInfoCircle } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const Products = ({ category, filters, sort }) => {
	//  ########## states ##########
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	//  ########## fetching data ##########
	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(
					category
						? `http://localhost:5000/api/products/all?category=${category}`
						: `http://localhost:5000/api/products/all`
				);
				setProducts(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, [category]);

	useEffect(() => {
		category &&
			setFilteredProducts(
				products.filter((item) =>
					Object.entries(filters).every(([key, value]) =>
						item[key].includes(value)
					)
				)
			);
	}, [products, category, filters]);

	useEffect(() => {
		if (sort === 'newest') {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.createdAt - b.createdAt)
			);
		} else if (sort === 'asc') {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.prices - b.prices)
			);
		} else {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => b.createdAt - a.createdAt)
			);
		}
	}, [sort]);

	let mappableProducts;
	if (category && filteredProducts.length < 1) {
		mappableProducts = filteredProducts;
	} else {
		mappableProducts = products.slice(0, 11);
	}

	return (
		<Wrapper>
			{mappableProducts.map((item, k) => (
				<Container key={k}>
					<Title>{item.title}</Title>
					<BackgroundCircle />
					<Image src={item.img} />
					<Info>
						<IconContainer>
							<Icon>
								<BsCartPlus />
							</Icon>
							<Icon>
								<BsInfoCircle />
							</Icon>
							<Icon>
								<BsHeart />
							</Icon>
						</IconContainer>
					</Info>
				</Container>
			))}
		</Wrapper>
	);
};

export default Products;

// ########### styled components ###########
const Title = styled.h2`
	position: absolute;
	top: 1rem;
	left: 2rem;
	z-index: 10;
	transition: all 0.3s;
	border-radius: 1rem;
`;

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

	:hover ${Title} {
		background-color: #f5f5f5d1;
		padding: 1rem;
		margin-right: 2rem;
	}
`;

const BackgroundCircle = styled.div`
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

const IconContainer = styled.div`
	margin-top: 8rem;
	display: flex;
`;

const Icon = styled.button`
	cursor: pointer;
	border: none;
	width: 3rem;
	height: 2rem;
	border-radius: 0.4rem;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1rem;
	transform: scale(1.3);
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.5);
	}
`;

const Wrapper = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
// ########### styled components ###########
