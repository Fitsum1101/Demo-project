import React from 'react'

export default function Contact() {
  return (
    <div className=''>

      <div className="text-center bg-[#eff2f1]">
            <div class="text_wrapper">
                <p className='text-[#a6560c]'>Drop Us a Line</p>
                <p className="text-7xl ">Round-the-clock <br/>Service</p>
                <p className="#6A6A6A my-10">Sed id semper risus in hendrerit gravida rutrum quisque. <br/>
                    Vitae proin sagittis nisl Vel elit scelerisque mauris rhoncus mattis rhoncus urna.</p>
            </div>
            <div className="bg-gray-200 w-[955px] h-[680px] item-center mx-auto mt-10 rounded-lg">
                <div class="inner_form_wrapper">
                    <form action="">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                
                                <input type="text" id="last-name" name="last-name" placeholder='firstname' className='w-[450px] h-[60px] my-5 mx-5 border rounded-full px-10'/>
                            </div>
                            <div>
                            
                            <input type="text" id="last-name" name="last-name" placeholder='lastname' className='w-[450px] h-[60px] my-5 border rounded-full px-10  '/>
                                
                            </div>
                        </div>

                        
                            <div className="">
                                
                                <input type="email" id="email" name="email" className='w-[900px] h-[60px] my-5 border rounded-full px-10 hover:border-[#a6560c]' placeholder='email'/>
                            </div>
                    
                            
                                
                                <input type="text-field" id="text-field" name="text-field" placeholder='description' className='w-[900px] pb-[300px]  pt-10 border rounded-3xl border-stone-600 my-5 px-10 
                                hover:border-[#a6560c] '/>
                            
                        
                        
                            
                 
                    </form>
                    <button type="submit" className='border rounded-full border-[#dd7210] bg-[#dd7210] text-white w-[170px] h-[50px]   '>Submit</button>
                </div>
            </div>
            </div>
    </div>
  )
}
