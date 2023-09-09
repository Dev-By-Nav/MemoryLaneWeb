import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Review() {
  return (
    <div className="h-full">
      <Swiper
        style={{
          '--swiper-navigation-color': '#562812',
          '--swiper-pagination-color': '#562812',
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:h-80 h-128 bg-[#bc9e86]"
      >
        <SwiperSlide className="text-center text-xl bg-[#bc9e86] text-[#3e1d0e] flex justify-center items-center flex-col ">
          <h1 className='text-2xl'>School Prom</h1>
          <p className=' text-base w-3/4 font-raleway'>"I can't thank your photo booth team enough for making our school prom night a huge success! The photo booth was a massive hit with students and teachers alike. The high-quality prints made for fantastic keepsakes, and the personalized templates perfectly matched our prom theme. The attendant was patient, friendly, and ensured that everyone got a chance to strike their best pose. The photo booth became the ultimate social hub, with students gathering around, laughing, and capturing memories that will last a lifetime. Your photo booth services are a definite must-have for any school event!"</p>
        </SwiperSlide>
        <SwiperSlide className=" text-center text-xl bg-[#bc9e86] text-[#3e1d0e] flex justify-center items-center flex-col">
          <h1 className="text-2xl">Corporate Party</h1>
          <p className="text-base w-3/4 font-raleway">"Your photo booth was the star of our company's annual party! The setup was sleek and modern, fitting in perfectly with our event theme. The booth attendant was engaging and encouraged even the shyest of colleagues to join in on the fun! We really enjoyed being able to post the GIF’s to our Instagram stories right away!”</p>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl bg-[#bc9e86] text-[#3e1d0e] flex justify-center items-center flex-col">
          <h1 className="text-2xl w-1/3">Birthday Party</h1>
          <p className="text-base w-3/4 font-raleway ">“Thank you Memory Lane for creating such wonderful memories at my son’s birthday! The booth became the heart of the party for the kids! I really appreciated how patient and kind the attendant was with all the kids running around with props and what not. Several of my older guests made a comment about how accommodating and gentle the attendant was with their mobility aids 😊” </p>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Review;
