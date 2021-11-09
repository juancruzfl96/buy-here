import Navbar from './component/navbar';
import ItemListContainer from './component/main/ItemListContainer';
import Footer from './component/footer';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<ItemListContainer />
			<Footer />
		</div>
	);
}

export default App;
