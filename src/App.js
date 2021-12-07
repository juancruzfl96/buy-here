import { Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import ItemListContainer from './component/main/ItemListContainer';
import ItemDetailContainer from './component/main/ItemDetailContainer';
import WidgetPage from './component/main/WidgetPage';
import Footer from './component/footer';
import './App.css';
import ShowCategory from './component/main/ShowCategory';
import CartProvider from './contexts/CartContext';

function App() {
	return (
		<div className='App'>
			<CartProvider>
				<Navbar />
				<Routes>
					<Route path='/' element={<ItemListContainer />} />
					<Route path='/category/:id' element={<ShowCategory />} />
					<Route path='/item/:id' element={<ItemDetailContainer />} />
					<Route path='/shopping-cart' element={<WidgetPage />} />
				</Routes>
				<Footer />
			</CartProvider>
		</div>
	);
}

export default App;
