import React from 'react';
import {Routes,Route} from 'react-router-dom';

import Home from '../components/Home';
import Contact from '../components/Contact';
import Offer from '../components/Offer';
import About from '../components/About';

const AppPage = () => {
    return ( 
        <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/o_nas" element={<About/>}/>
<Route path="/zapytanie" element={<Offer/>}/>
<Route path="/kontakt" element={<Contact/>}/>


        </Routes>
     );
}
 
export default AppPage;