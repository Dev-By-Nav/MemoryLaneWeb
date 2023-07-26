import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ClientInfo from '../Components/ClientInfo'
import Pricing from '../Components/Pricing'
import Cards from '../Components/Card'

function Services() {
  return (
    <div>
        <Navbar />
          <Pricing />
          <Cards />
          <ClientInfo />
        <Footer />
    </div>
  )
}

export default Services