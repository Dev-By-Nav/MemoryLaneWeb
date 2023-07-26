import React from 'react'
import { Link } from 'react-router-dom'


const Cards = () => {
  return (
    <div className='w-full px-4 bg-white my-16'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10 mt-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:shadow-2xl hover:scale-105 duration-300'>
                <h2 className='text-2xl font-bold text-center py-8 text-[#562812] font-montserrat'>Bronze</h2>
                <p className='text-center text-4xl font-bold font-montserrat'>$375</p>
                <div className='text-center'>
                    <p className='py-2 border-b mx-8 mt-8 font-semibold text-lg font-montserrat'>2 Hours</p>
                    <p className='py-2 border-b mx-8 mt-6 font-medium font-raleway'>Additional Hours: $120/hr</p>
                </div>
                <button className='bg-[#bc9e86] text-white w-[200px] rounded-md font-semibold font-montserrat my-6 mx-auto px-6 py-3'><Link to='/contact-us'>Book Bronze</Link></button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:shadow-2xl duration-300 hover:scale-105'>
                <h2 className='text-2xl font-bold text-center py-8 text-[#562812] font-montserrat'>Gold</h2>
                <p className='text-center text-4xl font-bold font-montserrat'>$525</p>
                <div className='text-center'>
                    <p className='py-2 border-b mx-8 mt-8 font-semibold text-lg font-montserrat'>4 Hours</p>
                    <p className='py-2 border-b mx-8 mt-6 font-medium font-raleway'>Additional Hours: $90/hr</p>
                </div>
                <button className='bg-[#bc9e86] text-[#562812] w-[200px] rounded-md font-semibold font-montserrat my-6 mx-auto px-6 py-3'><Link to='/contact-us'>Book Gold</Link></button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:shadow-2xl duration-300 hover:scale-105'>
                <h2 className='text-2xl font-bold text-center py-8 text-[#562812] font-montserrat'>Silver</h2>
                <p className='text-center text-4xl font-bold font-montserrat'>$425</p>
                <div className='text-center '>
                    <p className='py-2 border-b mx-8 mt-8 font-semibold text-lg font-montserrat'>3 Hours</p>
                    <p className='py-2 border-b mx-8 mt-6 font-medium font-raleway'>Additional Hours: $110/hr</p>
                </div>
                <button className='bg-[#bc9e86] text-white w-[200px] rounded-md font-semibold font-montserrat my-6 mx-auto px-6 py-3'><Link to='/contact-us'>Book Silver</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Cards