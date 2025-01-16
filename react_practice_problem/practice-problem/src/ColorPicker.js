// build a color picker that allows users to select a color.

import React, { useState } from 'react'

const ColorPicker = () => {
    const[selectColor,setColorPicker] = useState('white');
    const handleChange=(e)=>{
        setColorPicker(e.target.value)
    }
  return (
    <div>
        <h2>Pick the color</h2>
        <input type='color' onChange={handleChange}/>
        <div style={{height:'200px', width:'200px', backgroundColor:selectColor}}></div>


    </div>
  )
}

export default ColorPicker