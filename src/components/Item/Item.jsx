import './Item.scss';

const Item = ({ title, price, description }) => {
    return (
        <div className="item-card">
            <img src="" alt="Imagen del producto" className="item-card__image"/>
            <h3 className="item-card__title">{title}</h3>
            <span className="item-card__price">{price} GIL</span>
            <p className="item-card__description">{description}</p>
        </div>
    );
}

export default Item;