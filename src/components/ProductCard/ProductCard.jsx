import React from 'react'
import Heart from '../../assets/icons/Heart.svg?react'
import Eye from '../../assets/icons/Eye.svg?react'
import YellowStar from '../../assets/icons/YellowStar.svg?react'
// import GamePad from '../../assets/images/GamePad.png';
// import Eye2 from '../../assets/icons/Eye.svg?react'

function ProductCard({image, name, price, discountPercent, oldPrice, ratingStar, rating}) {
  return (
    <div className=''>
      <div className='bg-[var(--secondary-colour1)] mx-auto w-[250px] h-[230px] mt-6'>
        <div className='flex justify-between px-4 pt-4'>
          <div className='bg-[var(--secondary-colour3)] w-12 h-6'>
            <p  className='text-white text-[15px] text-center'>{discountPercent}</p>
          </div>
          <div>
            <Heart className='bg-white mb-3' />
            <Eye />
          </div>
        </div>
        <img src={image} alt="" srcset="" className='w-32 mx-auto' />
      </div>
      <div className='mt-2 align-middle md:ml-0'>
        <p className='font-medium text-[16px]'>{name}</p>
        <div className='flex gap-3 my-1 text-[15px]'>
          <p className='text-[var(--secondary-colour3)] font-medium'>{price}</p>
          <p className='text-[var(--text-colour2)]'>{oldPrice}</p>
        </div>
        <div className='flex '>
          {ratingStar.map((star, index) => (
            <img src={star} alt="" srcset="" key={index} />
          ))}
          <p className='ml-2'>{rating}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard