import React from "react";
import { Route, Routes } from 'react-router-dom';

import Beranda from './Component/Beranda';
import Tentangsaya from './Component/Tentangsaya';
import Karya from './Component/Karya';
import Kontak from './Component/Kontak';
import Gallery from './Component/Gallery';
import Cart from './Component/Cart';
import './CSS/Utama.css'


const PoppinsFontLink = document.createElement("link");
PoppinsFontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap";
PoppinsFontLink.rel = "stylesheet";
document.head.appendChild(PoppinsFontLink);

class Utama extends React.Component {
    render() {
        return (
            <Routes>
                
                <Route exact path="/" Component={Beranda} />
                <Route exact path="/Tentangsaya" Component={Tentangsaya} />
                <Route exact path="/Karya" Component={Karya} />
                <Route exact path="/Kontak" Component={Kontak} />
                <Route exact path="/Gallery" Component={Gallery} />
                <Route exact path="/Cart" Component={Cart}/>
            </Routes>
        )
    }
}

export default Utama;