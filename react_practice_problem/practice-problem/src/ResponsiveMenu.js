// implement a responsive navigation menu with a hamburger icon

import React, { use, useState } from 'react'
import './Styles/ResponsiveMenu.css'
const ResponsiveMenu = () => {
  const[isOpen,setIsOpen] = useState(false);
const toogleMenu=()=>{
  setIsOpen(!isOpen);
}
  return (
    <div>
        <button className='menu-icon ' onClick={toogleMenu}>☰</button>
        <ul className= {`menu ${isOpen?'open':''}`}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
           

        </ul>
    </div>
  )
}

export default ResponsiveMenu