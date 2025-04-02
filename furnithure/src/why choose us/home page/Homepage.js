import React from 'react'
import couch from '../image/couch.png';  


const Navlinks = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'product', url: '/about' },
    { id: 3, title: 'catagories', url: '/services' },
    { id: 4, title: 'About us', url: '/contact' },
    
];
export default function Homepage() {
  return (
    
      <div className='bg-[#457b66] text-gray-900  px-32 w-[1330px] my-0 mx-auto'>
                  <div className='container flex justify-between py-2 px-4'>
                      <div className='font-extrabold text-xl'>
                      FURNITURE 
                      </div>
                      <div>
                          <ul className='flex items-center gap-10'>
                              {Navlinks.map(({ id, title, url }) => (
                                  <li key={id}>
                                      <a href={url} className=' hidden sm:inline-block hover:text-sky-500 text-xs font-semibold'>{title}</a>
                                  </li>
                                  
                              ))}
                              <li className='cursor-pointer group relative'>
          <a href="/#" className='hover:bg-sky-600 text-stone-950 px-4 py-2 rounded-md text-xs'>
              <div className='  sm:inline-block grid grid-cols-2 items-center gap-2'>
                  
                  <span className="material-icons text-4xl ">search</span>
                  <span className="material-icons text-4xl">shopping_cart</span>
                  
              </div>
          </a>
          
          
      </li>
      
                          </ul>
                      </div>
                  </div>
                  <div className='grid grid-cols-2 gap-4 py-10 px-20'>
                    <div>
                        <h1 className='text-3xl pt-20 pr-16 font-sans text-white'> MODERN INTERIOR 
                        <br/>DESIGN STUDIO
</h1>
<p> EXPLORE A VARIETY OF SEATING
<br/>OPTIONS INCLUDING DINING</p>
                    </div>
                    <div>
                     <img src={couch} alt='p'/>   
                    </div>
                  </div>
    </div>
  )
}
