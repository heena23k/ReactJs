import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    const CountInc=()=>{
        setCount(count+1);
    }
    const CountDec = ()=>{
        setCount(count-1);
    }
  return (
    <div>
        <h1>Counter:{count}</h1>

        <button onClick={CountInc} >+</button>
        <button onClick={CountDec}>-</button>

    </div>
  )
}

export default Counter