import { Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import ItemListContainer from './component/main/ItemListContainer';
import ItemDetailContainer from './component/main/ItemDetailContainer';
import Footer from './component/footer';
import './App.css';
import ShowCategory from './component/main/ShowCategory';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<ItemListContainer />} />
				<Route path='/category/:id' element={<ShowCategory />} />
				<Route path='/item/:id' element={<ItemDetailContainer />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
