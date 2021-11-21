import ItemCount from './ItemCount';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

import './index.css';

const ItemDetailContainer = () => {
	return (
		<div className='mainContainer'>
			{/* <div className='itemData'>
				<span className='img'>Foto</span>
				<h4>nombre del producto</h4>
	</div>
			<ItemCount  />*/}
			<ItemList />
			{/* <ItemDetail /> */}
		</div>
	);
};

export default ItemDetailContainer;
