import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface ShoppingCartProps {
    itemsList: CartItem[];
}

export class Cart extends Component<ShoppingCartProps> {
    render() {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 m-4">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Shopping Cart</h2>
                    <table className="w-full border-collapse">
                        <thead>
                        <tr className="bg-neonBlue">
                            <th className="text-sm font-normal border border-gray-300 px-4 py-2">Id</th>
                            <th className="text-sm font-normal border border-gray-300 px-4 py-2">Name</th>
                            <th className="text-sm font-normal border border-gray-300 px-4 py-2">Unit Price</th>
                            <th className="text-sm font-normal border border-gray-300 px-4 py-2">Quantity</th>
                            <th className="text-sm font-normal border border-gray-300 px-4 py-2">Total Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.itemsList.length === 0 ? (
                                <tr>
                                    <td colSpan={5}
                                        className="border border-gray-300 px-4 py-2 text-center text-gray-500">
                                        No Items to Display!
                                    </td>
                                </tr>
                            ) : (
                                this.props.itemsList.map((item) => (
                                    <tr key={item.product.id}
                                        className="bg-gray-50 hover:bg-gray-100 transition-colors">
                                        <td className="text-sm border border-gray-300 px-4 py-2">{item.product.id}</td>
                                        <td className="text-sm border border-gray-300 px-4 py-2">{item.product.name}</td>
                                        <td className="text-sm border border-gray-300 px-4 py-2">{item.product.price + ' ' + item.product.currency}</td>
                                        <td className="text-sm border border-gray-300 px-4 py-2">{item.itemCount}</td>
                                        <td className="text-sm border border-gray-300 px-4 py-2">{(item.itemCount * item.product.price) + ' ' + item.product.currency}</td>
                                    </tr>
                                ))
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}