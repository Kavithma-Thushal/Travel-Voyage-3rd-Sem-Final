import {Routes, Route} from 'react-router-dom';
import {Home} from '../../pages/Home/Home';
import {About} from '../../pages/About/About';
import {Contact} from '../../pages/Contact/Contact';
import {Cart} from '../../pages/Cart/Cart';
import {AddToCart} from '../AddToCart/AddToCart';

export function Content() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cart" element={<Cart itemsList={AddToCart.itemsList}/>}/>
            </Routes>
        </div>
    );
}