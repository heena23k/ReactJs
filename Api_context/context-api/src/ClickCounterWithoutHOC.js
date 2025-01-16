import React, { useState } from 'react'
import HOCWithCounter from './HOCWithCounter'
const ClickCounterWithoutHOC = (props) => {
    // const [count,setCount] = useState(0);
    // const incrementCount =()=>{
    //     setCount(count+1);
    // }

  return (
    <div>
        <button onClick={props.incrementCount}>Clicked {props.count}</button>
    </div>
  )
}

export default HOCWithCounter( ClickCounterWithoutHOC)