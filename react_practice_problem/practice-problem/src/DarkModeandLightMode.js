//Build a context provider that allows user to switch between light and dark themes, and use the context in different parts of the app to apply the selected theme.

import React from 'react'

const DarkModeandLightMode = () => {
  return (
    <div><label>
        <input type='checkbox'/>
        Dark Mode

        
    </label></div>
  )
}

export default DarkModeandLightMode