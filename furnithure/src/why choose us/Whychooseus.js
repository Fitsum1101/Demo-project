import React from 'react'
import {  FaDesktop,  FaMobileAlt, FaNetworkWired,   } from 'react-icons/fa'
import { FaHandshake } from 'react-icons/fa6'
import photo from './image/photo.jpg';


export default function Whychooseus() {
  return (
    <div className='bg-cream-100 font-serif-inter text-gray-900 w-[1330px] my-0 mx-auto'>
    <h1 className='text-center font-bold text-2xl pt-16 pb-6'>  WHY CHOOSE US</h1>  
    <h2 className='text-center font-semibold'> QUALITY CRAFTSMANSHIP</h2>
<p className='px-10 text-center mb-24'>AT OUR DESIGN STUDIO, WE PRIDE OURSELVES ON USING ONLY THE FINEST MATERIALS AND<br/>
  TECHNIQUES. EACH PIECE OF FURNITURE IS CRAFTED WITH CARE, ENSURING DURABILITY AND STYLE
 <br/>THAT LASTS</p>
 <div className='grid grid-cols-3 py-2 px-32 gap-2'> 
  <div>
  <div>
  
    <span className="material-icons text-4xl ">local_shipping</span>
    <h2 className='font-semibold py-2'>FAST  & FREE SHIPPING</h2>
    <p className=' lowercase font-inter text-gray-500'>
    WE UNDERSTAND THAT
<br/> WHEN YOU ORDER
<br/> FURNITURE, 
    </p>
  </div>
  <div>
    <FaHandshake className='text-5xl py-2  '/>
    <h2 className='font-semibold py-2 px-6  '> 24/7 SUPPORT</h2>
    <p className='lowercase font-inter text-gray-500'>
OUR SATISFACTION IS OUR PRIORITY,
  WHICH<br/> IS WHY WE OFFER ROUND
   THE-CLOCK<br/> SUPPORT! WHETHER
 YOU HAVE QUESTIONS <br/>ABOUT A
 PRODUCT, 
    </p>
  </div>
 </div>
 <div>
  <div><div className='flex text-2xl '>
    <FaMobileAlt/><FaNetworkWired/><FaDesktop/>
  </div>

 <h2 className='font-semibold py-2 px-10'>
 EASY TO SHOP
 </h2>
 <p className='pb-5 lowercase font-inter text-gray-500'>
 HOPPING FOR FURNITURE SHOULD
  BE A BREEZE,<br/> AND WE MAKE IT
  SIMPLE! OUR USER-FRIENDLY
  <br/>WEBSITE IS DESIGNED WITH YOU
  IN MIND,
 </p>
  </div>
  <div>
    
    <span className="material-icons text-4xl ">task_alt</span>
    <h2 className='font-semibold pt-5 px-3'>HASSLE FREE RETURNS</h2>
    <p className='lowercase font-inter text-gray-500'>
  ENJOY WORRY-FREE SHOPPING
 WITH OUR<br/> HASSLE-FREE
 RETURNS! IF YOU’RE NOT
 <br/>SATISFIED WITH YOUR
 PURCHASE, 

    </p>
  </div>
 </div>
 <div>
  <img src={photo} alt='p'/>
 </div>
 </div>

    </div>
  )
}
