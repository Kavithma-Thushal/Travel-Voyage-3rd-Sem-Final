import logo from "../../../assets/images/logo.png";

export function Navbar() {

    function login() {
        alert("Login Successfully...!")
    }

    return (
        <nav className="bg-darkBlue text-white p-2 pr-7">
            <div className="container mx-auto flex justify-between items-center">
                <a href="https://github.com/Kavithma-Thushal" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center">
                        <img src={logo} className="ml-2 mr-4 w-12" alt="Nav-logo"/>
                        <div className="text-lg font-bold">MOBILE <span className="text-neonBlue">HUB</span>
                        </div>
                    </div>
                </a>
                <div className="space-x-8 text-sm font-semibold">
                    <a href="" className="hover:text-neonBlue transition-colors duration-300">DASHBOARD</a>
                    <a href="customer" className="hover:text-neonBlue transition-colors duration-300">CUSTOMER</a>
                    <a href="item" className="hover:text-neonBlue transition-colors duration-300">INVENTORY</a>
                    <a href="orders" className="hover:text-neonBlue transition-colors duration-300">ORDERS</a>
                    <a href="orderDetails" className="hover:text-neonBlue transition-colors duration-300">ORDER
                        DETAILS</a>
                    <button
                        className="ml-4 px-4 py-2 bg-neonBlue text-white font-semibold rounded hover:text-darkBlue transition-colors duration-300"
                        onClick={login}>LOGIN
                    </button>
                </div>
            </div>
        </nav>
    );
}