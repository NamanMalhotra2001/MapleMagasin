import React from 'react';

// Components
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';

const Home = () => {
	return (
		<div /* style={{ maxHeight: 'var(--maxHeight)', overflowY: 'auto' }} */>
			<Slider />
			<h1
				style={{
					fontSize: '3rem',
					marginLeft: '2rem',
					fontFamily: 'var(--font1)',
					marginTop: '1rem',
				}}
			>
				Browse Categories
			</h1>
			<Categories />
			<h1
				style={{
					fontSize: '3rem',
					marginLeft: '2rem',
					fontFamily: 'var(--font1)',
				}}
			>
				Top Products
			</h1>
			<Products />
			<Newsletter />
		</div>
	);
};

export default Home;
