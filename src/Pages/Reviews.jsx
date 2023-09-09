import React from 'react'
import Navbar from '../Components/Navbar'
import Review from '../Components/Review'
import Footer from '../Components/Footer'
import LeaveReview from '../Components/LeaveReview'

function Reviews() {
  return (
    <div>
        <Navbar />
        <div className='bg-[#bc9e86] pt-16'>
            <p className='text-[#562812] text-2xl font-semibold  flex items-center justify-center font-montserrat'>Have a look at what our clients think of us!</p>
        </div>
        <Review />
        <div className='pt-16'>
            <p className="text-[#562812] text-2xl font-semibold  flex items-center justify-center font-montserrat">Had a good time at one of our booths ?</p>
            <p className="text-[#562812] text-xl font-medium  flex items-center justify-center font-montserrat">Leave us a review !</p>
        </div>
        <LeaveReview />
        <Footer />
    </div>
  )
}

export default Reviews