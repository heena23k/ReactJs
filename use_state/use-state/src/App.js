

import { useState } from 'react';
import './App.css';

const  App=()=>{
  const[count,setCount] = useState(0);
  console.log(count);
  console.log(setCount);
  const handleClick=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }
  return (
    <div>
 
  <button onClick={handleClick}>+</button>
  <h1>{count}</h1>
  <button onClick={decrement}>-</button>
    </div>
  );
} 

export default App;
