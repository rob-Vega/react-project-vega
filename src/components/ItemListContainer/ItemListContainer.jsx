import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    return (
        <div className='p-12'>
            <h2 className="font-bold text-2xl pb-12">{greeting}</h2>
            <ItemCount stock={6} initial={1}/>
            <ItemList/>
        </div>
    );
}

export default ItemListContainer;