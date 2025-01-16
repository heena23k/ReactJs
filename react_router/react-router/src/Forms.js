import React, { useState } from 'react'

const Forms = () => {
    const[name,setName] = useState("")
const handleName = (e)=>{
    console.log(e.target.value);
    setName(e.target.value);
    
}
  return (
    <div>
        <label>Name:
        <input type='text' value = {name} onChange={handleName}/>
      
        </label>  {name}
    </div>
  )
}

export default Forms