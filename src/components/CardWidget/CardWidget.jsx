import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CardWidget.scss';

const CardWidget = () => {
    return (
        <FontAwesomeIcon icon={faShoppingCart} className="shopping-card-icon"/>
    );
}

export default CardWidget;