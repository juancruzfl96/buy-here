import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CartWidget = () => {
	return (
		<>
			<Link to='/shopping-cart'>
				<FontAwesomeIcon icon={faShoppingCart} />
			</Link>
		</>
	);
};

export default CartWidget;
