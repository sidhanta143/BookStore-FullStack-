import React from 'react'
import { useForm } from 'react-hook-form';
import Navbar from '../Component/Navbar'
import { Link} from 'react-router-dom'
import Login from '../Component/Login'


const SignUp = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const onSubmit= (data) => console.log(data)
  return (
  <>

 <div className="min-h-screen flex items-center justify-center bg-white text-black ">
  <Navbar/>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
       <Link to="/" className='ml-[45vh] bg-white  rounded-[50%]  hover:bg-gray-600  '>X</Link>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form className="space-y-5 "onSubmit={handleSubmit(onSubmit)}>
      
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full  px-4 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
           {...register("FullName", { required: true })} />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("email", { required: true })}/>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter a strong password"
              className="w-full px-4 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("password", { required: true })}/>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Write confirm password"
              className="w-full px-4 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
           {...register("conform password", { required: true })} />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          <a className='text-black font-medium hover:underline ' href="/">Already have an account?</a>{" "}
          
          <a  className="text-indigo-600 font-medium hover:underline"  onClick={()=>document.getElementById("my_modal_3").showModal()}>
            Log in
          </a>
        
        </p>
          <Login/>
      </div>











</div>

</>
  )
}

export default SignUp
