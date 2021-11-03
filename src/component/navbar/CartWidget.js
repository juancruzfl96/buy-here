import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
	return (
		<>
			<a href='/shopping-cart'>
				<FontAwesomeIcon icon={faShoppingCart} />
			</a>
		</>
	);
};

export default CartWidget;
