import Navbar from './component/navbar';
import ItemListContainer from './component/main/ItemListContainer';
import ItemDetailContainer from './component/main/ItemDetailContainer';
import Footer from './component/footer';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			{/* <ItemListContainer /> */}
			<ItemDetailContainer />
			<Footer />
		</div>
	);
}

export default App;
