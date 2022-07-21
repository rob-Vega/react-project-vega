import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    return (
        <div className='mx-14 my-4'>
            <h2 className="font-bold text-4xl py-6">{greeting}</h2>
            <ItemCount stock={6} initial={1}/>
            <ItemList/>
        </div>
    );
}

export default ItemListContainer;