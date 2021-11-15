import './item.css';

const Item = ({ item }) => {
	return (
		<div className='itemConteiner'>
			<img src={item.pictureUrl} alt={item.title} width='200' />
			<h3>{item.title}</h3>
			<h3>{`$${item.price}`}</h3>
			<h5>{item.description}</h5>
			<a href='#'>Ver mas detalles</a>
		</div>
	);
};

export default Item;
