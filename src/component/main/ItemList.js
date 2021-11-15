import { useState, useEffect } from 'react';
import Item from './Item';
import trumpeterMalbec from '../../img/trumpeterMalbec.jpg';
import fernetBranca from '../../img/fernetBranca.jpg';
import vodkaSmirnoff from '../../img/vodkaSmirnoff.jpg';

import './itemList.css';

const ItemList = () => {
	const [items, setItems] = useState([]);

	useEffect(async () => {
		const response = await new Promise((resolve, reject) => {
			setTimeout(() => {
				const itemsFromBackEndResponse = [
					{
						id: 1,
						title: 'Fernet Branca',
						description: 'Fernet',
						price: 450,
						pictureUrl: fernetBranca,
					},
					{
						id: 2,
						title: 'Vodka Smirnoff',
						description: 'Vodka',
						price: 350,
						pictureUrl: vodkaSmirnoff,
					},
					{
						id: 3,
						title: 'Vino Trumpeter',
						description: 'Malbec',
						price: 850,
						pictureUrl: trumpeterMalbec,
					},
				];
				resolve(itemsFromBackEndResponse);
			}, 2000);
		});
		setItems(response);
	}, []);

	return (
		<div className='itemListContainer'>
			{items.map((item, id) => (
				<Item item={item} key={id} />
			))}
		</div>
	);
};

export default ItemList;
