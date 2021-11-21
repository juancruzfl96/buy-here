import { useState, useEffect } from 'react';
import Item from './Item';
import ItemDetail from './ItemDetail';
import trumpeterMalbec from '../../img/trumpeterMalbec.jpg';
import iPhone13Pro from '../../img/iPhone13Pro.jpg';
import vodkaSmirnoff from '../../img/vodkaSmirnoff.jpg';

import './itemList.css';

const ItemList = () => {
	const [items, setItems] = useState(null);

	useEffect(async () => {
		const response = await new Promise((resolve, reject) => {
			setTimeout(() => {
				const itemsFromBackEndResponse = [
					{
						id: 1,
						title: 'iPhone 13 Pro',
						description:
							'Pantalla Super Retina XDR de 6.1 pulgadas con ProMotion que brinda una respuesta más rápida y fluida',
						price: 999,
						pictureUrl: iPhone13Pro,
						categorie: 'iphone',
					},
					{
						id: 2,
						title: 'Vodka Smirnoff',
						description: 'Vodka',
						price: 350,
						pictureUrl: vodkaSmirnoff,
						categorie: 'iphone',
					},
					{
						id: 3,
						title: 'Vino Trumpeter',
						description: 'Malbec',
						price: 850,
						pictureUrl: trumpeterMalbec,
						categorie: 'iphone',
					},
				];
				resolve(itemsFromBackEndResponse);
			}, 2000);
		});
		setItems(response);
	}, []);

	if (!items) return <h1>loading</h1>;

	return (
		<div className='itemListContainer'>
			{/* {items.map((item, id) => (
				<ItemDetail item={item} key={id} />
			))} */}
			<ItemDetail item={items[0]} />
		</div>
	);
};

export default ItemList;
