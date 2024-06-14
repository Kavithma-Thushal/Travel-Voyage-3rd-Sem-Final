import {useState, useEffect} from 'react';
import {CartItem} from "../../../model/CartItem";

interface ModifyCartProps {
    data: any;
}

export function AddToCart({data}: ModifyCartProps) {

    const [itemCount, setItemCount] = useState<number>(1);

    useEffect(() => {
        if (data.isAdded) {
            const existingItem = AddToCart.itemsList.find(item => item.product.id === data.product.id);
            if (!existingItem) {
                AddToCart.itemsList.push({
                    product: data.product,
                    itemCount: itemCount,
                });
            }
        }
    }, [data, itemCount]);

    useEffect(() => {
        const item = AddToCart.itemsList.find(item => item.product.id === data.product.id);
        if (item) {
            const index = AddToCart.itemsList.indexOf(item);
            AddToCart.itemsList.splice(index, 1, {
                product: data.product,
                itemCount: itemCount,
            });
        }
    }, [itemCount, data]);

    const increaseItemCount = () => {
        setItemCount(prevCount => prevCount + 1);
    };

    const decreaseItemCount = () => {
        if (itemCount > 1) {
            setItemCount(prevCount => prevCount - 1);
        } else {
            alert("Item count can't be less than 1");
        }
    };

    return (
        <div
            className="flex items-center justify-between mt-2 p-2 text-xs text-center border border-gray-200 rounded-md shadow-sm w-full">
            <button
                className="bg-blue-300 rounded-full h-6 w-6 flex items-center justify-center font-bold hover:bg-blue-400 transition"
                onClick={decreaseItemCount}>-
            </button>
            <span className="mx-2 text-gray-700 font-bold">{itemCount}</span>
            <button
                className="bg-blue-300 rounded-full h-6 w-6 flex items-center justify-center font-bold hover:bg-blue-400 transition"
                onClick={increaseItemCount}>+
            </button>
        </div>
    );
}

AddToCart.itemsList = [] as CartItem[];