//implement a basic toogle switch
import React, { useState } from 'react'

const ToogleSwitch = () => {
    const[isToggled,setISToggled] = useState(false);
    const handleToggle=()=>{
        setISToggled(!isToggled);
    }
  return (
    <div>
       <label>
        <input type="checkbox" onChange={handleToggle} />
        
       </label>
       <p>{isToggled? "on" :"off"}</p>
    </div>
  )
}

export default ToogleSwitch