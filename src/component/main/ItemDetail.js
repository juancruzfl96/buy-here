import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ItemCount from './ItemCount';
import './itemDetail.css';

const ItemDetail = () => {
	const { id } = useParams();
	const [items, setItems] = useState(null);

	const getProductsAxios = async () => {
		const getAxios = await axios.get('../data/db.json');
		const responseAxios = getAxios.data;
		setItems(responseAxios);
	};

	useEffect(() => {
		setTimeout(() => getProductsAxios(), 2000);
	}, []);
	console.log(id);

	if (!items) return <h1>Loading...</h1>;

	return (
		<div className='itemDetail'>
			<img
				alt={items.title}
				src={items[id].imagen}
				className='imgPhoneDetail'
			/>
			<div className='detail'>
				<h3>{items[id].title}</h3>
				<h3>{`U$D${items[id].price}`}</h3>
				<p>{items[id].description}</p>
				<ItemCount initial={1} stockTotal={8} />
			</div>
		</div>
	);
};

export default ItemDetail;
