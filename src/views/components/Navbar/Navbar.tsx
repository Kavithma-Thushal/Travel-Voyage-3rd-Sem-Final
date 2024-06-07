import logo from "../../../assets/images/logo.png";
import "./Navbar.css";

export function Navbar() {
    return (
        <nav className="bg-darkBlue text-white p-2 pr-7">
            <div className="container mx-auto flex justify-between items-center">
                <a href="https://github.com/Kavithma-Thushal" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center">
                        <img src={logo} className="Nav-logo mr-2" alt="Nav-logo"/>
                        <div className="text-lg font-bold">MOBILE <span className="text-neonBlue">HUB</span>
                        </div>
                    </div>
                </a>
                <div className="space-x-8 text-sm font-semibold">
                    <a href="dashboard" className="hover:text-neonBlue transition-colors duration-300">DASHBOARD</a>
                    <a href="customer" className="hover:text-neonBlue transition-colors duration-300">CUSTOMER</a>
                    <a href="item" className="hover:text-neonBlue transition-colors duration-300">INVENTORY</a>
                    <a href="orders" className="hover:text-neonBlue transition-colors duration-300">ORDERS</a>
                    <a href="orderDetails" className="hover:text-neonBlue transition-colors duration-300">ORDER
                        DETAILS</a>
                </div>
            </div>
        </nav>
    );
}