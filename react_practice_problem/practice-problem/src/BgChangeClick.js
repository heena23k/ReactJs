// create a component that changes background color when clicked

import React, { useState } from "react";

const BgChangeClick = () => {
   const[backgroundColor,setBackgroundColor] = useState('gray')
   const handleClick=()=>{
// using callback function
const newColor = backgroundColor==='gray'? 'lightblue':'gray'
setBackgroundColor(newColor);
   }

  return (
    <div onClick={handleClick}
      style={{
        backgroundColor,
        width: "200px",
        height: "200px",
        cursor: "pointer",
        

      }}
    >
      Click Me to change color
     
    </div>
  );
};

export default BgChangeClick;
