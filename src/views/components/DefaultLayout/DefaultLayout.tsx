import {NavBar} from '../Navbar/NavBar';
import {Content} from '../Content/Content';
import {Footer} from '../Footer/Footer';

export function DefaultLayout() {
    return (
        <div>
            <NavBar/>
            <Content/>
            <Footer/>
        </div>
    );
}