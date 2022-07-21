const Item = ({ image, title, price }) => {
    return (
        <div className="flex flex-col h-auto w-80 border rounded-lg justify-center items-center mb-5 space-y-2 py-6">
            <img src={image} alt="Imagen del producto" className="h-64 object-contain pb-4"/>
            <h3 className="font-bold text-lg">{title}</h3>
            <span className="font-medium text-gray-500 text-md pb-2">{price} GIL</span>
            <button className="p-2 border w-3/5">Add to cart</button>
        </div>
    );
}

export default Item;