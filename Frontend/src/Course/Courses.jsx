
import React from 'react'
import { Link} from 'react-router-dom'

import List from '../../public/List.json'
import Cards from '../Component/Cards'

const Courses = () => {
  console.log(List);
  
  return (
    <>
     <div className='max-w-screen-2xl   container    
      mx-auto md:px-12 p-4 items-center justify-center '>
        <h1 className='mt-30  text-3xl mx-auto font-semibold md:px-20 px-4 '>We-re delighted to have you <span className='text-pink-500'>Here ! :)</span></h1>

    <p className='md:mt-10 p-4 align-middle mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, earum quia. Temporibus facilis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut quasi exercitationem quis odio et at, voluptatibus excepturi reprehenderit? Explicabo. ipsa nesciunt quo quasi harum cum sunt iusto repudiandae aspernatur neque voluptatum quas commodi ad placeat distinctio, rerum architecto ut sed fuga?</p>
        
      
       <Link to="/"> <button className='btn bg-pink-500 mr-[4vh] h-[5vh] w-[10vh] text-white p-2 px-4 py-4 rounded-md hover:shadow-lg  flex ml-[42%]  '>Back

        </button></Link>
     
      

        </div> 

           <div className='mt-12 grid grid-cols-1 md:grid-cols-4  justify-between'>
        
        {
        List.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))
      }
        </div >

      
    </>
  )
}

export default Courses
