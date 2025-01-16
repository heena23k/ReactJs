import React,{useState}from 'react'

const HoverCounterWithoutHOC = () => {
  const [count,setCount] = useState(0);
      const incrementCount =()=>{
          setCount(count+1);
      }
  
    return (
      <div>
          <button onMouseOver={incrementCount}>Clicked {count}</button>
      </div>
    )
  }


export default HoverCounterWithoutHOC