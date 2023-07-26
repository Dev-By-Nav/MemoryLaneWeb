import React from 'react';
import logo from '../assets/logo.png';

function About() {
  return (
    <div className='md:h-80 h-full bg-white flex flex-col md:flex-row my-8 '>
      <div className="md:w-1/4 md:ml-10 md:self-center mb-8 md:mb-0 ">
        <img src={logo} alt="" className="h-72 w-auto mx-auto md:mx-0 " />
      </div>
      <div className="md:w-3/4 flex text-left items-center mx-4 md:mr-10">
        <p className='font-raleway font-medium text-[#562812]'><span className="text-2xl">W</span>elcome to Memory Lane Co. Based out of Vancouver, British Columbia. If you are looking to add something extra special to your event, look no further! We service Surrey, Delta, Burnaby, Richmond, and Vancouver! Our photo booth service is the perfect way to entertain your guests and create lasting memories. And the best part? It won't break the bank! Our photo booth rentals are competitively priced, so you can bring the fun without breaking the budget. Whether it's a wedding, birthday party, or corporate event, our photo booth is sure to be a hit with your guests!<br/><br/> With our photo booth, your guests can strike a pose and take home physical copies of their photos as a memento of the special occasion. Our photobooth service also includes a stunning backdrop of your choice and a variety of fun props, so your guests can let their creativity shine!<br/><br/> We can't wait to be a part of your special event and help create lasting memories for you and your guests!</p>
      </div>
    </div>
  );
}

export default About;
