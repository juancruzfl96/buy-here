import { Link } from 'react-router-dom';
import './item.css';

const Item = ({ title, price, id }) => {
	return (
		<div className='itemConteiner'>
			{/* <img src={image} alt={title} width='150' /> */}
			{/* <h3>{title}</h3>
			<h3>{`U$D${price}`}</h3>
			<Link to={`/item/${id}`}>Ver mas detalles</Link> */}
		</div>
	);
};

export default Item;
