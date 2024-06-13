import {Link} from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

export function NavBar() {
    return (
        <div className="w-full p-4 bg-darkBlue flex items-center fixed justify-between">
            <div className="flex items-center">
                <a href="https://github.com/Kavithma-Thushal/Mobile-Hub-MERN.git" target="_blank">
                    <img className="h-8 w-8 mr-4" src={logo} alt="Logo"/>
                </a>
                <a href="https://github.com/Kavithma-Thushal/Mobile-Hub-MERN.git" target="_blank">
                    <h1 className="text-xl text-white font-semibold">
                        Mobile <span className="text-neonBlue">Hub</span>
                    </h1>
                </a>
            </div>
            <div className="flex items-center space-x-10">
                <ul className="list-none flex space-x-10">
                    <li className="text-white font-semibold cursor-pointer hover:text-neonBlue transition duration-300">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-white font-semibold cursor-pointer hover:text-neonBlue transition duration-300">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="text-white font-semibold cursor-pointer hover:text-neonBlue transition duration-300">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="text-white font-semibold cursor-pointer hover:text-neonBlue transition duration-300">
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
                <button
                    className="text-sm font-semibold bg-neonBlue px-4 py-2 rounded hover:text-white transition duration-300">
                    <Link to="/login">Login</Link>
                </button>
            </div>
        </div>
    );
}