import React from 'react'
import Home from './Components/Home'
import Course from './Course/Course'
import { Route, Router, Routes } from 'react-router-dom'
import Contact from './Contact/Contact'

import SignUp from './SignUp/SignUp'
import About from './SignUp/About/About'


const App = () => {
  return (
    <div className='text-black'>
      {/* <Home/>
    <Course/> */}

<div className='dark:bg-slate-900 dark:text-white '>
  <Routes>
<Route path='/' element={<Home></Home>} />
<Route path='/Course'element={<Course/>}/>
<Route path='/Contact'element={<Contact/>}/>
<Route path='/SignUp' element={<SignUp/>}/>
<Route path='/About' element={<About/>}/>


</Routes>
</div>

    </div>
  )
}

export default App
