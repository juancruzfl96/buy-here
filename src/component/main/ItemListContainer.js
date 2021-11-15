import ItemCount from './ItemCount';
import ItemList from './ItemList';

import './index.css';

const ItemListContainer = () => {
	return (
		<div className='mainContainer'>
			{/* <div className='itemData'>
				<span className='img'>Foto</span>
				<h4>nombre del producto</h4>
			</div>
			<ItemCount initial={1} stockTotal={8} /> */}
			<ItemList />
		</div>
	);
};

export default ItemListContainer;
