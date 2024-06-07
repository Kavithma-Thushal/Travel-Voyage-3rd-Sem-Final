import logo from "../../../assets/images/logo.png";
import "./Navbar.css";

export function Navbar() {
    return (
        <nav className="bg-darkBlue text-white p-2 pr-7">
            <div className="container mx-auto flex justify-between items-center">
                <a href="https://github.com/Kavithma-Thushal" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center">
                        <img src={logo} className="Nav-logo mr-2" alt="Nav-logo"/>
                        <div className="text-lg font-bold">M O B I L E <span className="text-neonBlue">H U B</span>
                        </div>
                    </div>
                </a>
                <div className="space-x-8 text-sm font-semibold">
                    <a href="#customers" className="hover:text-neonBlue transition-colors duration-300">CUSTOMERS</a>
                    <a href="#items" className="hover:text-neonBlue transition-colors duration-300">ITEMS</a>
                    <a href="#orders" className="hover:text-neonBlue transition-colors duration-300">ORDERS</a>
                    <a href="#orderDetails" className="hover:text-neonBlue transition-colors duration-300">ORDER DETAILS</a>
                </div>
            </div>
        </nav>
    );
}