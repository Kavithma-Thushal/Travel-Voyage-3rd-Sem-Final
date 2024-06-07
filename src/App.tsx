import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./views/components/Navbar/Navbar";
import {Content} from "./views/components/Content/Content";
import {Footer} from "./views/components/Footer/Footer";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Content/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;