import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.scss';

const CartWidget = () => {
    return (
        <FontAwesomeIcon icon={faShoppingCart} className="shopping-cart-icon"/>
    );
}

export default CartWidget;