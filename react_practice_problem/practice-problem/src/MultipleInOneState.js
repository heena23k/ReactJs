// work with multiple state in a single state object. the component shoud display following information on screen:
// 1. a count value,initially set to 0;
// 2. a text value,initially set to 'hello,world!'.
// 3. an "active" staus ,initially set to true.


import React, { useState } from 'react'

const MultipleInOneState = () => {
    const [state,setState] = useState({
        count:0,
        text:'Hello Word',
        isActive:true
    })
    function IncrementCount(){
setState({...state,count:state.count+1})
    }
    function changeText(){
        setState({...state,text:'updated text'})

    }
    function toogleActive(){
setState({...state,isActive:!state.isActive})
    }

  return (
    <div>
<h1> Multiple State Example</h1>
<p>Count:{state.count}</p>
<p>Text:{state.text}</p>
<p>Active:{state.isActive?'YES':'NO'}</p>
<button onClick={IncrementCount}>Increment</button>
<button onClick={changeText}>Change Text</button>
<button onClick={toogleActive}>Toogle Active</button>
    </div>
    
  )
}

export default MultipleInOneState