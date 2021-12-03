import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './item.css';

import axios from 'axios';

import './itemList.css';

const ItemList = () => {
	const [items, setItems] = useState(null);

	const getProductsAxios = async () => {
		const getAxios = await axios.get('../data/db.json');
		const responseAxios = getAxios.data;
		setItems(responseAxios);
	};
	useEffect(() => {
		setTimeout(() => getProductsAxios(), 2000);
	}, []);

	if (!items) return <h1>Loading...</h1>;

	return (
		<div className='itemListContainer'>
			{items.map((items, index) => {
				return (
					<div key={index}>
						<li className='itemConteiner'>
							<img alt={items.title} src={items.imagen} className='imgPhone' />
							<div className='data'>
								<h3>{items.title}</h3>
								<h3>{`U$D${items.price}`}</h3>
								<Link to={`/item/${items.id}`} className='detailBottom'>
									Ver mas detalles
								</Link>
							</div>
						</li>
					</div>
				);
			})}
		</div>
	);
};

export default ItemList;
