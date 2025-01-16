import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
const Navbar = () => {
 

  return (
    <nav>
    <ul>
        <Link to ="/" >Logo</Link>

        <li><Link to = "/Contact" >Contact</Link></li>
        <li><Link to = "/About">About</Link></li>
        <Link to = "/login"> <button>Login</button></Link>
       
    </ul>
    </nav>
  );
};

export default Navbar;
