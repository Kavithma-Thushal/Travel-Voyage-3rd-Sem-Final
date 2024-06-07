import logo from "../../assets/images/logo.png";
import "./Navbar.css";

export function Navbar() {
    return (
        <nav className="bg-darkBlue text-white p-2 pr-7">
            <div className="container mx-auto flex justify-between items-center">
                <a href="https://github.com/Kavithma-Thushal" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center">
                        <img src={logo} className="Nav-logo mr-2" alt="Nav-logo"/>
                        <div className="text-lg font-bold">P O R T F O <span className="text-neonBlue">L I O</span>
                        </div>
                    </div>
                </a>
                <div className="space-x-8 text-sm font-semibold">
                    <a href="#home" className="hover:text-neonBlue transition-colors duration-300">HOME</a>
                    <a href="#about" className="hover:text-neonBlue transition-colors duration-300">ABOUT</a>
                    <a href="#skills" className="hover:text-neonBlue transition-colors duration-300">SKILLS</a>
                    <a href="#projects" className="hover:text-neonBlue transition-colors duration-300">PROJECTS</a>
                    <a href="#services" className="hover:text-neonBlue transition-colors duration-300">SERVICES</a>
                    <a href="#contacts" className="hover:text-neonBlue transition-colors duration-300">CONTACTS</a>
                </div>
            </div>
        </nav>
    );
}