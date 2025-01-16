import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
const RouterExample = () => {
  console.log("RouterExample component rendered");

  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/home" element={<div>Home</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="'" element={<div>Error:404</div>} />

       
      </Routes>
    </BrowserRouter>
  );
};

export default RouterExample;
