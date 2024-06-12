import {Component} from "react";
import {NavBar} from "../Navbar/NavBar";
import {Content} from "../Content/Content";
import {Footer} from "../Footer/Footer";

export class DefaultLayout extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}