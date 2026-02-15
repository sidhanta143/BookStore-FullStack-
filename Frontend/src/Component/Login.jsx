
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Login = () => {



//   return (
//     <>
//      <div >
        
// <dialog id="my_modal_3" className="modal">
//   <div className="modal-box md:p-15 p-7  shadow-2xl bg-white text-black">
//     <form method="dialog  onSubmit={handleSubmit(onSubmit)}  ">
    
    
//     <button
//   type="button"
//   className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//   onClick={() => document.getElementById("my_modal_3").close()}
// >
//   ✕
// </button>

    
    
    
//     </form>
//     <h3 className="font-bold md:text-2xl text-xl">Login</h3>
//     <div>
//         <br />
//         <br />
//     <span className='text-2xl'>Email</span>
//     <br />
//     <br />
//     <input className='w-80 px-3 py-2 border rounded-md bg-white outline-none' type="Email"placeholder='Enter the valide Email'
//    />
    
// <br />
// <br />
// <span className='text-2xl'>password</span>
// <br />
// <br />
// <input className='w-80 px-3 py-2 border rounded-md bg-white outline-none' type="password"placeholder='Enter the password' 
// />

//   <br />
//   <br />
//   <button type="submit" className='bg-pink-700
//   mr-[4vh] h-[5vh] w-[10vh]  p-2 px-4 py-2 rounded-md hover:shadow-lg  flex 
//    text-white' >Login</button>
//     </div>
//     <br />
  
//  <h2 className=' md:ml-[25vh] ml-[15vh]'> Not registered?<a className='text-blue-500 cursor-pointer underline' href="SignUp"
 
 
//  >SignUp</a></h2>




//   </div>
// </dialog>
//  </div> 
//     </>
//   )
// }

// export default Login


import React from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
const Login = () => {
  
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box md:p-15 p-7 shadow-2xl bg-white text-black">

          {/* Close Button */}
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() =>
              document.getElementById("my_modal_3").close()
            }
          >
            ✕
          </button>

          <h3 className="font-bold md:text-2xl text-xl">Login</h3>

          {/* Form Starts Here */}
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <br />

            <span className="text-2xl">Email</span>
            <br /><br />
            <input
              className="w-80 px-3 py-2 border rounded-md bg-white outline-none"
              type="email"
              placeholder="Enter valid email"
              required
            {...register('Email', { required: true })}/>
           
            {errors.Email && <span className="text-red-600 text-5">This field is required</span>}

            <br /><br />

            <span className="text-2xl">Password</span>
            <br /><br />
            <input
              className="w-80 px-3 py-2 border rounded-md bg-white outline-none"
              type="password"
              placeholder="Enter password"
              required
            {...register('password', { required: true })}/>
            {errors.password && <span className="text-rose-600  text-5" >This field is required</span>}
            <br /><br />

            <button
              type="submit"
              className="bg-pink-700 h-[5vh] w-[10vh] rounded-md hover:shadow-lg text-white"
            >
              Login
            </button>
          </form>

          <br />

          <h2 className="md:ml-[25vh] ml-[15vh]">
            Not registered?{" "}
            <Link
              to="/SignUp"
              className="text-blue-500 cursor-pointer underline"
            >
              Sign Up
            </Link>
          </h2>

        </div>
      </dialog>
    </div>
  );
};

export default Login;
