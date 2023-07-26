import React from 'react'
import Navbar from '../Components/Navbar'
import Images from '../Components/ImagesList'
import Footer from '../Components/Footer'

// ----- Import Pictures From Events ----- 

function Gallery() {
  return (
    <div>
        <Navbar />
        <Images />
        <Footer />
    </div>
  )
}

export default Gallery