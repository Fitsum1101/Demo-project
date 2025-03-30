import React from 'react'
import { FaCheckCircle, FaDesktop, FaHandshakeAltSlash, FaMobileAlt, FaNetworkWired, FaRegHandshake, FaShippingFast } from 'react-icons/fa'
import { FaHandshake } from 'react-icons/fa6'
import photo from './image/photo.jpg';


export default function Whychooseus() {
  return (
    <div className='bg-cream-100'>
    <h1 className='text-center font-bold text-2xl  '>  WHY CHOOSE US</h1>  
    <h2 className='text-center font-semibold'> QUALITY CRAFTSMANSHIP
</h2>
<p className='px-10 text-center mb-24'>AT OUR DESIGN STUDIO, WE PRIDE OURSELVES ON USING ONLY THE FINEST MATERIALS AND<br/>
  TECHNIQUES. EACH PIECE OF FURNITURE IS CRAFTED WITH CARE, ENSURING DURABILITY AND STYLE
 <br/>THAT LASTS</p>
 <div className='grid grid-cols-3 py-10 px-8'> 
  <div>
  <div>
    <FaShippingFast className='text-8xl filter grayscale'/>
    <h2 className='font-semibold py-2'>FAST  & FREE SHIPPING</h2>
    <p className=' capitalize'>
    WE UNDERSTAND THAT
<br/> WHEN YOU ORDER
<br/> FURNITURE, YOU WANT IT
 <br/>DELIVERED QUICKLY AND
 <br/>WITHOUT HASSLE
    </p>
  </div>
  <div>
    <FaHandshake className='text-9xl py-2 '/>
    <h2 className='font-semibold py-2 px-6  '> 24/7 SUPPORT</h2>
    <p>
OUR SATISFACTION IS OUR PRIORITY,
  <br/>WHICH IS WHY WE OFFER ROUND
   <br/>THE-CLOCK SUPPORT! WHETHER
 <br/>YOU HAVE QUESTIONS ABOUT A
 <br/>PRODUCT, NEED ASSISTANCE WITH
 <br/>YOUR ORDER, OR REQUIRE DESIGN
 <br/>ADVICE, OUR DEDICATED TEAM IS
 <br/>HERE TO HELP ANYTIME
    </p>
  </div>
 </div>
 <div>
  <div><div className='flex text-6xl'>
    <FaMobileAlt/><FaNetworkWired/><FaDesktop/>
  </div>
 <h2 className='font-semibold py-2 px-10'>
 EASY TO SHOP
 </h2>
 <p className='pb-5'>
 HOPPING FOR FURNITURE SHOULD
 <br/> BE A BREEZE, AND WE MAKE IT
  <br/>SIMPLE! OUR USER-FRIENDLY
  <br/>WEBSITE IS DESIGNED WITH YOU
  <br/>IN MIND, ALLOWING YOU TO
 <br/>BROWSE OUR COLLECTION
 <br/>EFFORTLESSLY
 </p>
  </div>
  <div>
    <FaCheckCircle className='text-8xl ' />
    <h2 className='font-semibold pt-5 px-3'>HASSLE FREE RETURNS</h2>
    <p>
  ENJOY WORRY-FREE SHOPPING
 <br/>WITH OUR HASSLE-FREE
 <br/>RETURNS! IF YOU’RE NOT
 <br/>SATISFIED WITH YOUR
 <br/>PURCHASE, SIMPLY LET US
 <br/>KNOW—RETURNING ITEMS IS
 <br/>EASY AND STRAIGHTFORWARD.
 <br/>YOUR SATISFACTION IS OUR
 <br/>PRIORITY

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
