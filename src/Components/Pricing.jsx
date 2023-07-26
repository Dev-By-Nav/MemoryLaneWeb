import React from 'react'

function Pricing() {
  return (
    <div className='flex items-center justify-center mt-16 flex-col'>
        <h1 className=' text-2xl font-semibold font-montserrat'>Pricing & Services</h1>

        <div className='mt-10 pl-6'>
            <h2 className='text-lg font- font-montserrat'>All our packages include the following:</h2>
            <div className='mt-4 font-raleway'>
                <p className='py-1'>Free same-day delivery, setup and take-down on our time</p>
                <p className='py-1'>Unlimited use of photo booth</p>
                <p className='py-1'>Free onsite printing</p>
                <p className='py-1'>Link with digital access to all photos taken during event </p>
                <p className='py-1'>Modern and high quality props</p>
                <p className='py-1'>Your choice of backdrop (+$75 for 3D floral backdrops)</p>
                <p className='py-1'>4x6 prints on glossy photo paper</p>
                <p className='py-1'>Template of your choice from our collection (+$20 for custom designs)</p>
                <p className='py-1'>Full time Photo Booth attendant</p>
                <p className='py-1'>Professional studio lighting</p>
            </div>
        </div>
    </div>
  )
}

export default Pricing