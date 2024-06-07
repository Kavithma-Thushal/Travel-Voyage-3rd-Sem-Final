import {Navbar} from "./views/components/Navbar/Navbar";
import {Customer} from "./views/pages/Customer/Customer";
import {Footer} from "./views/components/Footer/Footer";

function App() {
    return (
        <div>
            <Navbar/>
            <Customer/>
            <Footer/>
        </div>
    );
}

export default App;