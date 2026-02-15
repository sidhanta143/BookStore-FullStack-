import React from 'react'
import Book from '../../public/List.json'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';

const Freebook = () => {
    const filterData=Book.filter((Data)=>{
        return Data.catagory==="Free"
    })
    // console.log(filterData);


var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


    
    
  return (
    <>
    <div className='bg-white   max-w-screen-2xl container  mx-auto md:px-20 md:ml-[13vh] px-4 text-black'>
<div>

<h1 className='font-bold text-xl  pb-2'>Free Offered Courses</h1>
<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facilis hic porro neque modi! Cupiditate deserunt obcaecati possimus accusamus excepturi totam magnam doloremque eos blanditiis.</h3>



</div>
<div>
      <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards item={ item} key={item.id} />
        ))}
      </Slider>
   
 </div>
 <br />
 <br />
 
{/* <div>
      <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards item={ item} key={item.id} />
        ))}
      </Slider>
   
 </div> */}
    </div>
    
    </>
  )
}

export default Freebook
