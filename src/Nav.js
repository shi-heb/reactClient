import React from 'react';
import { Link }from 'react-router-dom';

import './App.css';

function Nav() {
    const navStyle={color:'white'

    };
  return (
   <nav>
       <h3>Theo</h3>
       <ul className="nav-links">
           <Link style ={navStyle}to ="/register">
           <li>register</li>
           </Link>
           <Link style ={navStyle}to ="/">
           <li>home</li>
           </Link>
           <Link style ={navStyle}to ="/users">
           <li>all useres !!</li>
           </Link>
           <Link style ={navStyle}to ="/login">
           <li>login </li>
           </Link>
           <Link style ={navStyle}to ="/profile">
           <li>Profile </li>
           </Link>
           <Link style ={navStyle}to ="/logout">
           <li>logout </li>
           </Link>

       </ul>
   </nav>
  );
}

export default Nav;
