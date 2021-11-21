import { useState } from 'react';
import ItemCount from './ItemCount';
import './itemDetail.css';

const ItemDetail = ({ item }) => {
	const [element] = useState(item);

	return (
		<div className='itemDetail'>
			<img src={element.pictureUrl} alt={element.title} width='150' />
			<div className='detail'>
				<h3>{element.title}</h3>
				<h3>{`U$D${element.price}`}</h3>
				<p>{element.description}</p>
				<ItemCount initial={1} stockTotal={8} />
			</div>
		</div>
	);
};

export default ItemDetail;
