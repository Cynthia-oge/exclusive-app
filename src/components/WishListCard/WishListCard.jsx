import React from 'react'
import DeleteIcon from '../../assets/icons/Delete-Icon.svg?react'
import CartIcon from '../../assets/icons/Cart.svg?react'

const WishListCard = ({image, name, price, oldPrice}) => {
  return (
    <div className=''>
              <div className='bg-[var(--secondary-colour1)] mx-auto w-[250px] h-[230px] mt-6'>
                <div className='flex justify-end px-4 pt-4'>
                  
                  <div>
                    <DeleteIcon className='bg-white mb-3' />
                  </div>
                </div>
                <img src={image} alt="" srcset="" className='w-32 mx-auto' />
              </div>
              <div className='bg-black flex justify-center gap-2 text-[#bfbfbf] py-2'>
                <a href=""><CartIcon /></a>
                <a href="">Add To Cart</a>
                </div>
              <div className='mt-2 align-middle md:ml-0'>
                <p className='font-medium text-[16px]'>{name}</p>
                <div className='flex gap-3 my-1 text-[15px]'>
                  <p className='text-[var(--secondary-colour3)] font-medium'>{price}</p>
                  <p className='text-[var(--text-colour2)]'>{oldPrice}</p>
                </div>
              </div>
            </div>
  )
}

export default WishListCard