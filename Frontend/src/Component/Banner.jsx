
import React from 'react'
import Book from '../../public/Book.jpg'
import Footer from './Footer'
import Freebook from './Freebook'
// import Footer from './Footer'

const Banner = () => {
  return (
  <>
   <div className='bg-white my-10'>
     <div className='max-w-screen-2xl text-bold text-black container mx-auto md:px-30 px-15 flex flex-col md:flex-row ' >
        
      <div className=' md:w-1/2    w-full mt-12 md:mt-32'>
      
      <h2 className=' font-bold text-3xl md:text-4xl'>Hello,Welcomes here to learn  <br /></h2>
      <h2 className='text-4xl font-bold'> Something <span className='text-pink-500'>new everyday!!!</span></h2>
       <h3 className='text-xl   md:mt-8 mt-1'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, mollitia?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, dolor molestiae impedit perferendis ut molestias dolorem incidunt fugiat sunt ea, consequatur laudantium quibusdam mollitia cupiditate!

<div className='bg-white p-2 '>
  <div className="email border-2 rounded-[10px]  p-[5] w-full mt-5 align-middle    hover:shadow-lg  flex  ">
    <label className="input validator   md:w-full w-full   bg-white ">
  <svg className="h-[1em] bg-amber-50  opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="1 2 24 24">
    <g
    
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input className=''   type="email" placeholder="mail@site.com" required />
 
</label>

</div>
</div>


       </h3>

      <button className="btn md:mt-3 mt-3 btn-secondary">Secondary</button>
      
      
      </div>
      <div className='w-full   md:w-1/2 mt-12 md:mt-0 '>
      <img className='align-middle order-1  md:w-full w-full' src={Book} alt="book" />
      </div>
      
    </div>
    <Freebook/>
   <Footer/>
   </div>
  </>
  )
}

export default Banner
