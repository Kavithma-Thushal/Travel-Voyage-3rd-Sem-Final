import {Component} from "react";

export class Footer extends Component {
    render() {
        return (
            <footer className="w-full p-4 bg-darkBlue flex justify-center items-center fixed bottom-0">
                <p className="text-sm text-white flex items-center">© 2024 All Rights Reserved. Designed by
                    <a href="https://github.com/Kavithma-Thushal/Mobile-Hub-MERN.git" target="_blank">
                        <span
                            className="text-neonBlue font-semibold ml-1 hover:text-[#00a3e0]">Kavithma Thushal</span>
                    </a>
                </p>
            </footer>
        );
    }
}