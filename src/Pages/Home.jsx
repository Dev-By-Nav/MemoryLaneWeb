import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Review from '../Components/Review'
import Footer from '../Components/Footer'
import Features from '../Components/Features'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Review />
        <Footer />
    </div>
  )
}

export default Home