import {useState} from 'react';
import {AddToCart} from "../AddToCart/AddToCart";

interface ProductProps {
    data: any;
}

export function Product({data}: ProductProps) {

    const [isActive, setIsActive] = useState<boolean>(false);

    const addToCartOnClick = () => {
        setIsActive(true);
    };

    const productImage = require('../../../assets/images/products/' + data.image);

    return (
        <div
            className="w-60 p-4 rounded-lg shadow-2xl bg-white flex flex-col justify-between items-center mt-[200px] ml-[200px]">
            <img className="h-32" src={productImage} alt={data.name}/>
            <div className="mt-4 w-full text-center">
                <h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
                <div className="mt-2 bg-blue-300 text-gray-600 px-3 py-1 rounded inline-block">
                    <span className="text-md font-medium">{data.price} {data.currency}</span>
                </div>
            </div>
            <div className="mt-4 w-full flex justify-center">
                {isActive ? (
                    <AddToCart data={{product: data, isAdded: isActive}}/>
                ) : (
                    <button
                        className="w-full mt-2 py-2 bg-neonBlue text-sm font-semibold rounded-lg hover:text-white transition duration-300"
                        onClick={addToCartOnClick}>Add to Cart</button>
                )}
            </div>
        </div>
    );
}