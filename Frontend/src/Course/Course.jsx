
import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Courses from './Courses'
// import list from '../../public/List.json'


const Course = () => {
    // console.log(list);
    
  return (
    <>
     <div className='bg-white text-black z-0'>
       <Navbar/>
       <div className='min-h-screen  bg-white'>
        <Courses/>
       </div>
       <Footer/>



        
        
        </div> 
    </>
  )
}

export default Course
