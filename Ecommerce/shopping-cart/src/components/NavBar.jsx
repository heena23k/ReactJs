import React from "react";
import '../styles/NavBar.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const NavBar = ({size,setShow}) => {
  return (
     <nav>
        <div className='nav_box'>
            <span className='my_shop' >
                DxO Shop
            </span>
            <div className='cart' onClick={()=>setShow(false)}>
                <span>
                    <i className='fas fa-cart-plus'></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  );
};

export default NavBar;
