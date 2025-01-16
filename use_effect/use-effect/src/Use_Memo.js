import React, { useState } from 'react'


const Use_Memo = () => {
    const[count,setCount] = useState(0);
    const[input,setInput] = useState('');
function handleInput (e){
    setInput(e.target.value)
function slowFunction(){
  for(let i =0;i<=1000000000;i++){
    console.log("Hello i am slow function");
    
  }
  slowFunction();
}


}
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Click</button>
    <br/>
    <input type='text' onClick={handleInput} value={input}/>
    <h1>Input:{input}</h1>
    
    <hr/>
    

    </div>
  )
}

export default Use_Memo