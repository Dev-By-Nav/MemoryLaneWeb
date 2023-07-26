import React from 'react';

import Img_1 from '../Images/img-1.jpg';
import Img_2 from '../Images/img-2.jpg';
import Img_3 from '../Images/img-3.jpg';
import Img_4 from '../Images/img-4.jpg';
import Img_5 from '../Images/img-5.jpg';
import Img_6 from '../Images/img-6.jpg';
import Img_7 from '../Images/img-7.jpg';
import Img_8 from '../Images/img-8.jpg';
import Img_9 from '../Images/img-9.jpg';
import Img_10 from '../Images/img-10.jpg';
import Img_11 from '../Images/img-11.jpg';
import Img_12 from '../Images/img-12.jpg';
import Img_13 from '../Images/img-13.jpg';
import Img_14 from '../Images/img-14.jpg';
import Img_15 from '../Images/img-15.jpg';
import Img_16 from '../Images/img-16.jpg';
import Img_17 from '../Images/img-17.jpg';
import Img_18 from '../Images/img-18.jpg';
import Img_19 from '../Images/img-19.jpg';
import Img_20 from '../Images/img-20.jpg';
import Img_21 from '../Images/img-21.jpg';
import Img_22 from '../Images/img-22.jpg';
import Img_23 from '../Images/img-23.jpg';
import Img_24 from '../Images/img-24.jpg';
import Img_25 from '../Images/img-25.jpg';
import Img_26 from '../Images/img-26.jpg';
import Img_27 from '../Images/img-27.jpg';
import Img_28 from '../Images/img-28.jpg';
import Img_29 from '../Images/img-29.jpg';
import Img_30 from '../Images/img-30.jpg';
import Img_31 from '../Images/img-31.jpg';

const ImageList = () => {
  const images = [
    { image: Img_25 },
    { image: Img_2 },
    { image: Img_24 },
    { image: Img_3 },
    { image: Img_26 },
    { image: Img_4 },
    { image: Img_5 },
    { image: Img_19 },
    { image: Img_20 },
    { image: Img_9 },
    { image: Img_10 },
    { image: Img_27 },
    { image: Img_11 },
    { image: Img_28 },
    { image: Img_12 },
    { image: Img_13 },
    { image: Img_6 },
    { image: Img_17 },
    { image: Img_18 },
    { image: Img_22 },
    { image: Img_21 },
    { image: Img_14 },
    { image: Img_15 },
    { image: Img_16 },   
    { image: Img_25 },
    { image: Img_1 },
    { image: Img_2 },
    { image: Img_29 },
    { image: Img_7 },
    { image: Img_24 },
    { image: Img_3 },
    { image: Img_26 },
    { image: Img_4 },
    { image: Img_5 },
    { image: Img_19 },
    { image: Img_8 },
    { image: Img_20 },
    { image: Img_9 },
    { image: Img_10 },
    { image: Img_27 },
    { image: Img_16 },
    { image: Img_11 },
    { image: Img_30 },
    { image: Img_12 },
    { image: Img_13 },
    { image: Img_6 },
    { image: Img_23 },   
    { image: Img_18 },
    { image: Img_22 },
    { image: Img_21 },
    { image: Img_14 },
    { image: Img_31 },
    { image: Img_15 },
    { image: Img_23 },
    // Add more image paths as needed
  ];

  return (
    <div className='max-w-[90vw] mx-auto columns-1  xs:columns-2 md:columns-3 lg:columns-4 xl:columns-5 space-y-4 my-6'>
      {images.map((image, index) => (
        <img src={image.image} className='hover:scale-105 transform-gpu'/>
      ))}
    </div>
  );
};

export default ImageList;