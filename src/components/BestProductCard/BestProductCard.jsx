import React from 'react'
import Heart from '../../assets/icons/Heart.svg?react'
import Eye from '../../assets/icons/Eye.svg?react'

const BestProductCard = ({image, name, price, oldPrice, ratingStar, rating}) => {
  return (
    <div className=''>
          <div className='bg-[var(--secondary-colour1)] mx-auto w-[250px] h-[230px] mt-6'>
            <div className='flex justify-end px-4 pt-4'>
              
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

export default BestProductCard