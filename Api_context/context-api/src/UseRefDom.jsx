import React, { useEffect, useRef } from 'react'

const UseRefDom = () => {
    const inputE1 = useRef(null);
    // useEffect(()=>{
    //     inputE1.current.focus();
    // },[])
    function handleFocus(){
        inputE1.current.style.backgroundColor = "";
    }
    function handleBlur(){
        inputE1.current.style.backgroundColor = "blue";
    }
  return (

    <div>
        <input ref={inputE1} type='text'onFocus={handleFocus} onBlur={handleBlur}/>
    </div>
  )
}

export default UseRefDom