import { useState, useContext } from 'react';
import './itemCount.css';
import { CartContext } from '../../contexts/CartContext';

const ItemCount = ({ initial, stockTotal }) => {
	const [count, setCount] = useState(initial);
	const [stock, setStock] = useState(stockTotal);
	const [cont, setCont] = useState(0);
	const { setCart, cart } = useContext(CartContext);

	const increase = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const subtract = () => {
		if (count > 1 && stock >= 1) {
			setCount(count - 1);
		}
	};

	const onAdd = () => {
		if (stock >= count) {
			setStock(stock - count);
			console.log('Su stock es de ' + (stock - count));
			setCont(count);
			setCart(...cart, { cantidad: cont });
		} else {
			console.log('No contamos con ese stock');
		}
	};

	return (
		<div className='container'>
			<span className='stock'>Disponible: {stock}</span>
			<div className='counters'>
				<button
					className={`buttonCount ${count === 1 && 'disabled'} ${
						stock === 0 && 'disabled'
					}`}
					onClick={subtract}>
					{' '}
					-{' '}
				</button>
				<span className='count'> {count} </span>
				<button
					className={`buttonCount ${count === stock && 'disabled'} ${
						stock === 0 && 'disabled'
					}`}
					onClick={increase}>
					{' '}
					+{' '}
				</button>
			</div>
			<button
				className={`addCart ${stock === 0 && 'disabled'}`}
				onClick={onAdd}>
				Agregar al carrito
			</button>
		</div>
	);
};

export default ItemCount;
