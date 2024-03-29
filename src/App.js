import './App.css';
import './components/Header.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Footer from './components/Footer';
import Contact from './ui/Contact';
import Products from './ui/Products';
import Home from './ui/Home';
import Company from './ui/Company';
import Operations from './ui/Operations';
import Media from './ui/Media';
function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<Company />} />
                    <Route path='projects' element={<Operations />} />
                    <Route path='products' element={<Products />} />
                    <Route path='media' element={<Media />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
