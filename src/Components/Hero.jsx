import React from 'react'
import banner from '../assets/banner3.jpg'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className=' '>
      <div
        className="bg-[url] bg-cover bg-center flex items-center justify-center h-96 md:h-150 bg-[#bc9e86] "
        style={{ backgroundImage: `url(${banner})` }}
      >

        <div className='flex flex-col items-center py-8'>
          <div className='flex flex-col justify-center items-center text-white '>
            <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold font-montserrat py-3 text-center">Lower Mainland's Most Affordable <br/>Photo Booth Service!</h1>
            <h2 className="text-center w-3/4 font-semibold font-raleway sm:text-lg text-base">Add a touch of excitement to weddings, parties, corporate gatherings, and more, as guests indulge in laughter and creativity at our interactive photobooths.</h2>

          </div>
        <div className=" flex space-x-4 mt-10 md:mt-16 ">
          <button className="bg-[#bc9e86] md:hover:text-white text-[#562812] py-2 px-4 md:py-4 md:px-8 md:text-lg font-semibold rounded font-montserrat">
            <Link to='/gallery'>See Our Work</Link>
          </button>
          <button className="bg-[#bc9e86] md:hover:text-white text-[#562812] py-2 px-5 md:py-4 md:px-9 md:text-lg font-semibold font-montserrat rounded">
            <Link to='/contact-us'>Get In Touch</Link>
          </button>
        </div>
        </div>
      </div>
      
    </div>


  )
}

export default Hero