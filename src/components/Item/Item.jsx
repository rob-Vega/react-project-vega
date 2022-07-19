import './Item.scss';

const Item = ({ image, title, price, description }) => {
    return (
        <div className="item-card">
            <img src={image} alt="Imagen del producto" className="item-card__image"/>
            <h3 className="item-card__title">{title}</h3>
            <span className="item-card__price">{price} GIL</span>
            {/* <button className='item-card__button'>See Detail</button> */}
        </div>
    );
}

export default Item;