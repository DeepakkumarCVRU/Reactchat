import React from 'react'
import { TbMathGreater } from "react-icons/tb";


function Midhome() {
  
  return (
    <div  className='h-[90]  border-none text-center md:text-start sm:text-start -inset-3 z-10  ' >  
      <div className='md:p-10 md:px-28 sm:p-8 sm:px-10 p-4 px-4  bg-image-second translate-y-28 flex-1 ' >
      <div>
        <h1 className='md:text-6xl sm:text-5xl text-4xl '>Your website your way</h1>
        <h1 className='md:text-3xl mt-3'>Create a website in 10 minutes. It doesn't get <br/>any easier.</h1>
      </div>
      <div className='mt-4 text-start'>
        <div>
          <TbMathGreater  className=' -translate-y-1 text-green-600 text-2xl hidden sm:inline-block md:inline-block'/>
          <p className='text-[20px] inline-block mx-5'>Used by 229,000 small business owners</p>
        </div>

        <div>
          <TbMathGreater  className=' -translate-y-1 text-green-600 text-2xl hidden sm:inline-block md:inline-block'/>
        <p className='text-[20px] inline-block mx-5'>Average score 4.5 / 5 on Trustpilot</p>
        </div>

        <div>
          <TbMathGreater  className=' -translate-y-1 text-green-600 text-2xl hidden sm:inline-block md:inline-block'/>
        <p className='text-[20px] inline-block mx-5'>Content creation with AI</p>
        </div>
      </div>
      <div className='md:mt-10 mt-5 flex '>
        <input type="text" placeholder='enter your address' className='md:p-3 h-14 w-80  border border-black border-r-0  outline-none rounded-l-xl text-black pr-8 text-[1.2rem]' />
        <button className='border border-black px-5 rounded-xl -translate-x-5 bg-green-400 h-14 hover:bg-white md:text-2xl sm:txet-[16px '>Get started</button>
        <div className='  flex items-center'>
          <button className='p-4 px-5 border h-14 border-black rounded-xl hover:bg-green-400 bf-[#fff] text-[18px] hidden md:flex sm:flex '>How it work</button>
        </div>
      </div>
    </div>
    
    </div>

  )
}

export default Midhome