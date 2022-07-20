import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);

    const onAdd = () => {
        count < stock ? setCount(count + 1) : alert('😔')
    }

    const onRemove = () => {
        count > 1 ? setCount(count - 1) : alert('😡💢')
    }

    return (
        <div className="flex flex-col w-64 m-4 space-y-4">
            <h2>Product</h2>
            <div className="flex items-center justify-center space-x-4">
                <span 
                    className="h-8 w-8 rounded-full bg-cyan-500 hover:bg-cyan-700 text-white font-bold text-xl"
                    onClick={onRemove}
                >-</span>
                <p>{count}</p>
                <span
                    className="h-8 w-8 rounded-full bg-cyan-500 hover:bg-cyan-700 text-white font-bold text-xl"
                    onClick={onAdd}
                >+</span>
            </div>
            <button className="p-2 border">Add to cart</button>
        </div>
    );
}

export default ItemCount;