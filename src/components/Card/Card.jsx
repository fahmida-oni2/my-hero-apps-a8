import React from 'react';
import downloadsImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
const Card = ({data}) => {
    const {image,title,
downloads,ratingAvg
 } =data
    return (
        <div className="card bg-base-100 border-gray-300 shadow-xl  hover:scale-105 transition ease-in-out m-5 p-5">
  <figure className='h-48 overflow-hidden'>
    <img
      src={image}
      alt="Shoes" 
      className='lg:w-full md:w-[200px] w-[450px] lg:object-cover p-2'/>
  </figure>
  <div className="card-body space-y-3">
    <h2 className="card-title">{title}</h2>
   <div className='flex justify-between'>
    <button className='flex h-10 w-20 btn btn-outline gap-2 border-gray-200 text-green-500 bg-base-300'>
        <img className='h-5 w-5' src={downloadsImg} alt="" />
        <span>{downloads}</span>
    </button>
    <button  className='flex h-10 w-20 btn btn-outline gap-2 border-gray-200 text-orange-500 bg-base-300'>
        <img className='h-5 w-5' src={ratingImg}alt="" />
        <span>{ratingAvg}</span>
    </button>
   </div>
  </div>
</div>
    );
};

export default Card;