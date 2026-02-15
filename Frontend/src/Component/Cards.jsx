import React from 'react'

const Cards = ({item}) => {
    // console.log(item);
    
  return (
<>
<div className='mt-8'>
<div className="card  w-100 shadow-2xl hover:p-1 bg-white">
  <figure>
    <img
      src={item.img}
      alt="Shoes" />
  </figure>
  <div className="card-body bg-white text-black">
    <h2 className="card-title ">
    {item.name}
      <div className="badge badge-secondary">{item.catagory}</div>
    </h2>
    <p > {item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline p-3 hover:text-pink-700">
        <button>Price ${item.price}</button>
      </div>
      <div className="badge badge-outline hover:bg-pink-400   text-black px-5 py-5 duration-200">ByNow</div>
    </div>
  </div>
</div>


</div>


</>
  )
}

export default Cards
