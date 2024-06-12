import {Component} from "react";
import {Routes, Route} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {About} from "../../pages/About/About";
import {Contact} from "../../pages/Contact/Contact";
import {Cart} from "../../pages/Cart/Cart";
import {AddToCart} from "../AddToCart/AddToCart";

export class Content extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                    <Route path="/cart" element={<Cart itemsList={AddToCart.itemsList}/>}></Route>
                </Routes>
            </div>
        );
    }
}