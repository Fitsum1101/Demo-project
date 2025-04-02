import React from 'react'
import Mask from '../image/Mask.png';
import img1 from '../image/img1.png';
import img2 from '../image/img2.jpg';

export default function Aboutus() {
  return (
    <div className='grid grid-cols-2 my-20 mx-32'>

     
<div className="relative">
  <img
    src={Mask}
    alt="Mask"
    className="absolute left-0 w-[255px] rounded-[5px]"
  />
  <img
    src={img1}
    alt="Modern interior design concept"
    className="absolute top-32 left-[220px] w-[177px] rounded-[5px]"
  />
  <img
    src={img2}
    alt="Furniture arrangement example"
    className="absolute top-0 left-[270px] w-[116px] rounded-[5px]"
  />
</div>
        
        <div className="">
        <h1 className='text-4xl text-red-700'>
                We help you make <br />
                Modern Interior Design
              </h1>
           
            <div class="some_detail">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                aut cum aliquid<br/> officia nobis pariatur debitis
                aut cum aliquid officia nobis pariatur debitis similiq 
              </p>
            </div>
            <div class="column_wrapper">
              
                <ul className="grid grid-cols-2 my-6  gap-4">
                  <div className='list-disc'>
                  <li>
                    aut cum aliquid officia nobis pariatur debitis similiq
                  </li>
                  <li>
                    ratione aliquam? Aspernatur vero numquam consequuntur itaque
                    nulla officia!
                  </li>
                  </div>
                
             
              <div className="list-disc">
                
                  <li>
                    ratione aliquam? Aspernatur vero numquam consequuntur itaque
                    nulla officia
                  </li>
                  <li>
                    ratione aliquam? Aspernatur vero numquam consequuntur itaque
                    nulla officia
                  </li>
                
              </div>
              </ul>
            </div>
            <button type="submit" className='border rounded-full border-[#dd7210] bg-[#dd7210] text-white w-[170px] h-[50px]  items-center  '>Explore</button>
      </div>
    
          
              </div>
 
    
  )
}
