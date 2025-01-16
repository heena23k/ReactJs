import React from 'react'
import { memo } from 'react';

const NewComp = (props) => {
    console.log("NewComp Render",props.newCount);
    
  return (
    <div>
    <h1>NewComp:{props.newCount}</h1></div>
  )
}

export default memo(NewComp)