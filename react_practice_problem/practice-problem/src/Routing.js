// create a basic routing setup with react router.
import React from 'react'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import Home from './forRouter/Home'
import Contact from './forRouter/Contact'
import About from './forRouter/About'


const Routing = () => {
  return (
    <div>
        <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <Link to = '/home'>Home</Link>
                </li>
                <li>
                    <Link to = '/contact'>Contact</Link>
                </li>
                <li>
                    <Link to = '/About'>About</Link>
                </li>
            </ul>
        </nav>
            <Routes>
                <Route path='/home' element  = {<Home/>}></Route>
                <Route path='/contact' element  = {<Contact/>}></Route>
                <Route path='/about' element  = {<About/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing