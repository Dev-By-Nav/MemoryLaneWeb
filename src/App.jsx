import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import Reviews from './Pages/Reviews'




function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact-us' element={<Contact />}></Route>
        <Route path='/testimonials' element={<Reviews />}></Route>

        <Route path='/*' element={<Error />}></Route>
      </Routes>
    </div>
  )
}

export default App