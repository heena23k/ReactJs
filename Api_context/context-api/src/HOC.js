import React from 'react'
import ClickCounterWithoutHOC from './ClickCounterWithoutHOC'
import HoverCounterWithoutHOC from './HoverCounterWithoutHOC'
import HOCWithCounter from './HOCWithCounter'
const HOC = () => {
  return (
    <div>
{/* this work when click button */}
        <ClickCounterWithoutHOC/>
       
        {/* this work when hover the button */}
        <HoverCounterWithoutHOC/> 
       <HOCWithCounter/>
       
    </div>
  )
}

export default HOC