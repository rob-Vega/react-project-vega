import './ItemListContainer.scss';
import Item from "../Item/Item";

const ItemListContainer = ({greeting}) => {
    return (
        <div className='products'>
            <h2>{greeting}</h2>
            <Item 
                title="Potion" 
                price={50} 
                description="Restores HP by 100"
            />
            <Item 
                title="Hi-Potion" 
                price={300} 
                description="Restores HP by 500"
            />
            <Item 
                title="Ether" 
                price={1500} 
                description="Restores MP by 100"
            />
            <Item 
                title="Phoenix Down" 
                price={300} 
                description="Restores life"
            />
        </div>
    );
}

export default ItemListContainer;