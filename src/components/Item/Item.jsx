const Item = ({ image, title, price }) => {
    return (
        <div className="flex flex-col h-96 w-72 shadow-lg rounded-xl justify-center">
            <img src={image} alt="Imagen del producto" className=" h-3/5 object-contain pb-8"/>
            <h3 className="font-bold text-lg">{title}</h3>
            <span className="font-medium text-gray-500">{price} GIL</span>
        </div>
    );
}

export default Item;