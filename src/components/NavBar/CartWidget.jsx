import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import './CartWidget.scss';

const CartWidget = () => {
    return (
        <FontAwesomeIcon icon={faShoppingCart} className="shopping-cart-icon cursor-pointer text-gray-600 hover:text-black pl-4 ml-4 border-l-2"/>
    );
}

export default CartWidget;