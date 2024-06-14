import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {DefaultLayout} from './views/components/DefaultLayout/DefaultLayout';
import {Login} from './views/pages/Login/Login';

export function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<DefaultLayout/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}