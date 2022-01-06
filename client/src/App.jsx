import React from 'react';

// Components
import NavBar from './Components/NavBar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import ProductPage from './Pages/ProductPage';

// Styles
import { GlobalStyles } from './GlobalStyles';
import Cart from './Pages/Cart';

function App() {
	return (
		<>
			<NavBar />
			{/* <Login/> */}
			{/* <Register/> */}
			{/* <Home /> */}
			{/* <ProductList /> */}
			{/* <ProductPage /> */}
			<Cart/>
			<Footer />
			<GlobalStyles />
		</>
	);
}

export default App;
