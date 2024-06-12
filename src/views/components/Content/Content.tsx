import {Route, Routes} from "react-router-dom";
import {Dashboard} from "../../pages/Dashboard/Dashboard";
import {Customer} from "../../pages/Customer/Customer";
import {Item} from "../../pages/Item/Item";
import {Orders} from "../../pages/Orders/Orders";
import {OrderDetails} from "../../pages/OrderDetails/OrderDetails";

export function Content() {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Dashboard/>}></Route>
                <Route path={"/customer"} element={<Customer/>}></Route>
                <Route path={"/item"} element={<Item/>}></Route>
                <Route path={"/orders"} element={<Orders/>}></Route>
                <Route path={"/orderDetails"} element={<OrderDetails/>}></Route>
            </Routes>
        </div>
    );
}