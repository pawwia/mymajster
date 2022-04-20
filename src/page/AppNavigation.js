import React from 'react';
import './AppNavigation.css';
import { NavLink } from 'react-router-dom';

const list=[

    {name:"Home", path:"/"},
    {name:"O nas", path:"/o_nas"},
    {name:"Zapytanie o ofertę", path:"/zapytanie"},
    {name:"Kontakt", path:"/kontakt"},
    ]

const AppNavigation = () => {
const menu=list.map(item=>(
    <li  key={item.path}>
<NavLink  className={(navData)=>navData.isActive?"navactive":null} to={item.path} >{item.name}</NavLink>
    </li>


))

    return (  
        <nav>
<span>Logo</span>
<ul>
{menu}
</ul>
<span>Przełącznik</span>

        </nav>
   );
}
 
export default AppNavigation;