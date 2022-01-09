import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Products from '../Components/Products';

const ProductList = () => {
	// initial
	const { category } = useParams();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// ########## states ##########
	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState('newest');
	const [showClear, setShowClear] = useState(false);

	// ########## handler functions ##########
	const handleFilters = (e) => {
		const value = e.target.value;
		setFilters({
			...filters,
			[e.target.name]: value,
		});
		setShowClear(true);
	};

	const handleClear = () => {
		setFilters({});
		setShowClear(false);
	};

	return (
		<Container>
			<Title>{category}</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select
						name='color'
						value={filters.color ? filters.color : 'Color'}
						onChange={handleFilters}
						color={`${
							filters.color ? filters.color : '#4d4d4d'
						}`}
					>
						<option disabled>Color</option>
						<option>white</option>
						<option>black</option>
						<option>red</option>
						<option>blue</option>
						<option>yellow</option>
						<option>green</option>
					</Select>
					<Select
						name='size'
						value={filters.size ? filters.size : 'Size'}
						onChange={handleFilters}
						color='#4d4d4d'
					>
						<option disabled>Size</option>
						<option>XS</option>
						<option>S</option>
						<option>M</option>
						<option>L</option>
						<option>XL</option>
					</Select>
					<ClearButton
						showClear={showClear}
						onClick={handleClear}
					>
						Clear filters
					</ClearButton>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select
						onChange={(e) => setSort(e.target.value)}
						color='#4d4d4d'
					>
						<option value='newest'>Newest</option>
						<option value='asc'>Price (asc)</option>
						<option value='desc'>Price (desc)</option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products category={category} filters={filters} sort={sort} />
		</Container>
	);
};

export default ProductList;

// ########### styled components ###########
const Container = styled.div`
	min-height: var(--minHeight);
`;

const Title = styled.h1`
	font-size: 3rem;
	padding-left: 1rem;
	font-family: var(--font5);
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	margin: 20px;
`;

const ClearButton = styled.button`
	cursor: pointer;
	opacity: ${(props) => (props.showClear ? 1 : 0)};
	background-color: white;
	border: none;
	padding: 11px;
	outline: 1px solid;
	border-radius: 10px;
	font-size: 1.2rem;
	transition: all 0.3s;

	:hover {
		outline: 2px solid #68ffde;
	}

	:focus {
		outline: 2px solid #68ffde;
		background-color: #eaf9ff;
	}
`;

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
`;

const Select = styled.select`
	cursor: pointer;
	padding: 10px;
	margin-right: 20px;
	font-size: 1.2rem;
	border: none;
	transition: all ease 0.3s;
	border-radius: 10px;
	background-color: #f5fcff;

	:focus {
		border-radius: 10px;
		outline: 1px solid
			${(props) =>
				props.color === 'white' ? 'lightgray' : props.color};
		background-color: #f5fcff;
		box-shadow: 5px 5px 5px
			${(props) =>
				props.color === 'white' ? 'lightgray' : props.color};
	}
`;
// ########### styled components ###########
