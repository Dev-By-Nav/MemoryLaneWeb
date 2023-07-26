// Features.js
import React from 'react';
import { AiFillPrinter, AiFillCamera } from 'react-icons/ai'
import { HiTemplate } from 'react-icons/hi'


const Features = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center md:items-center mx-6 my-16">
      {/* Feature 1 */}
      <div className="flex items-center mb-4 md:mb-0 mr-4">
        <AiFillPrinter className='w-16 h-16 mr-2 text-[#562812]'/>
        <p className='font-raleway font-semibold'>Free unlimited onsite printing & digital versions available</p>
      </div>

      {/* Feature 2 */}
      <div className="flex items-center mb-4 md:mb-0 mr-4">
        <AiFillCamera className='w-16 h-16 mr-2 text-[#562812]' />
        <p className='font-raleway font-semibold'>Unlimited use of photobooth. All booths operated by attendant </p>
      </div>

      {/* Feature 3 */}
      <div className="flex items-center mb-4 md:mb-0">
        <HiTemplate className='w-16 h-16 mr-2 text-[#562812]' />
        <p className='font-raleway font-semibold'>Choose from a range of templates or get a custom one for only $20</p>
      </div>


    </div>
  );
};

export default Features;
