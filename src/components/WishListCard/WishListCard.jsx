import React, { useState } from 'react'
import DeleteIcon from '../../assets/icons/Delete-Icon.svg?react'
import CartIcon from '../../assets/icons/Cart.svg?react'
import { useNavigate } from 'react-router-dom'

const WishListCard = ({image, name, price, oldPrice}) => {
    const addToCart = (
        <div className='bg-black flex justify-center gap-2 text-[#bfbfbf] py-2 addButton cursor-pointer'>
                <CartIcon className='addButton' />
                Add To Cart
                </div>
    )

     const [ishovered, setIsHovered] = useState(false)
     const navigate = useNavigate()

  return (
    <div className='' 
        onMouseEnter={(e) => {
        console.log(e.target)
        setIsHovered(true)
        } } 
        onMouseLeave={() => setIsHovered(false)} 
        onClick={(e) => {console.log(e.target) 
            if(e.target.matches('.addButton')){
                console.log('Add button clicked')
                e.stopPropagation()
            } else {
                navigate('/productdescription')
            }
        }
        }>
              <div className='bg-[var(--secondary-colour1)] mx-auto w-[250px] h-[230px] mt-6 relative'>
                <div className='px-4 pt-4 relative'>
                  
                  {ishovered &&  
                    <div className='absolute right-8'>
                    <DeleteIcon className='bg-white mb-3'/>
                  </div>
                  }
                </div>
                <img src={image} alt="" srcset="" className='w-32 mx-auto' />
               {ishovered && 
                <div className='absolute left-0 right-0 bottom-0 addButton'>
                {addToCart}
              </div>}
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