import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import NavBar from './Components/NavBar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';
import NoPage from './Pages/NoPage';

// Styles
import { GlobalStyles } from './GlobalStyles';

function App() {
	let isLoggedIn = true;

	return (
		<Router>
			<GlobalStyles />
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />}/>
				{isLoggedIn ? (
					''
				) : (
					<>
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
					</>
				)}
				<Route
					path='/products/:category'
					element={<ProductList />}
				/>
				<Route path='/product/:id' element={<ProductPage />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/ns'></Route>
				<Route path='*' element={<NoPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
