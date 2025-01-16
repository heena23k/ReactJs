// create a different route pages component using useEffect to update the document title with the visited page whenever it changes.

import React from 'react'
import Home from './Home'
import About from './About'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const RoutingPage = () => {
    return (
        <BrowserRouter>
        <div>
          <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
      
          </Routes>
        </div>
        </BrowserRouter>
      )
}

export default RoutingPage