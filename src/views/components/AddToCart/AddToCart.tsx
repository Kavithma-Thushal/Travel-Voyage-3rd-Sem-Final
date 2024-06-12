import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface ModifyCartProps {
    data: any;
}

interface ModifyCartState {
    itemCount: number;
}

export class AddToCart extends Component<ModifyCartProps, ModifyCartState> {

    public static itemsList: CartItem[] = [];

    constructor(props: ModifyCartProps) {
        super(props);
        this.state = {
            itemCount: 1,
        };
    }

    componentDidMount() {
        const {itemCount} = this.state;
        if (this.props.data.isAdded) {
            if (!AddToCart.itemsList.find(item => item.product.id === this.props.data.product.id)) {
                AddToCart.itemsList.push({
                    product: this.props.data.product,
                    itemCount: itemCount,
                });
            }
        }
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any) {
        let {itemCount} = this.state;
        let item = AddToCart.itemsList.find(item => item.product.id === this.props.data.product.id);
        if (item) {
            let index = AddToCart.itemsList.indexOf(item);
            AddToCart.itemsList.splice(index, 1);
            AddToCart.itemsList.push({
                product: this.props.data.product,
                itemCount: itemCount,
            });
        }
    }

    render() {

        let {itemCount} = this.state;

        const increaseItemCount = () => {
            this.setState({
                itemCount: ++itemCount,
            });
        };

        const decreaseItemCount = () => {
            if (itemCount > 1) {
                this.setState({
                    itemCount: --itemCount,
                });
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
}