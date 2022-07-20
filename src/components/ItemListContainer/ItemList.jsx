import Item from './Item';

const ItemList = () => {
    return (
        <section className='grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4'>
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
                image="./assets/images/Ether.png"
                title="Ether" 
                price={1500} 
                description="Restores MP by 100"
            />
            <Item 
                title="Phoenix Down" 
                price={300} 
                description="Restores life"
            />
        </section>
    );
}

export default ItemList;