import React from 'react'
import BoomBox from '../../assets/images/boomBox.png'

const CategoryBanner = () => {
  return (
    <div className='bg-black md:flex justify-around w-[80%] mx-auto h-[480px] md:h-[300px] my-8'>
        <div className='pt-10 px-7 '>
            <p className='text-[var(--button1)] text-[13px]'>Categories</p>
            <h3 className='text-white font-medium text-[28px] py-4'>Enhance Your <br /> Music Experience</h3>
            <div className='flex gap-2'>
                <div className='w-10 h-10 bg-[var(--primary-bg)] rounded-full'>
                    <p className='text-center text-[10px] pt-1 font-medium'>23 </p>
                    <p className='text-center text-[10px]'>Hours</p>
                </div>

                <div className='w-10 h-10 bg-[var(--primary-bg)] rounded-full'>
                    <p className='text-center text-[10px] pt-1 font-medium'>05</p>
                    <p className='text-center text-[10px]'>Days</p>
                </div>

                <div className='w-10 h-10 bg-[var(--primary-bg)] rounded-full'>
                    <p className='text-center text-[10px] pt-1 font-medium'>59 </p>
                    <p className='text-center text-[10px]'>Minutes</p>
                </div>

                <div className='w-10 h-10 bg-[var(--primary-bg)] rounded-full'>
                    <p className='text-center text-[10px] pt-1 font-medium'>35 </p>
                    <p className='text-center text-[10px]'>Seconds</p>
                </div>
            </div>
            <button className='w-25 h-8 bg-[var(--button1)] text-white text-[13px] rounded-[3px] mt-4'>Buy Now</button>
        </div>
        <img src={BoomBox} alt="" srcset="" className='w-[50%]' />
    </div>
  )
}

export default CategoryBanner