import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import apple from '../../assets/images/apple.png';
import hero from '../../assets/images/hero.jpg';

function Hero() {
  return (
   <div className="flex justify-around mt-6">
  <div className=" md:grid grid-cols-[1fr_2fr] gap-6 w-full max-w-6xl">
    
    {/* Left Menu */}
    <div className='hidden lg:flex border-r border-[#ececec]'>
      <ul className="leading-7 text-sm">
        <li><a href="">Woman's Fashion</a></li>
        <li><a href="">Men's Fashion</a></li>
        <li><a href="">Electronics</a></li>
        <li><a href="">Home & Lifestyle</a></li>
        <li><a href="">Medicine</a></li>
        <li><a href="">Sports & Outdoors</a></li>
        <li><a href="">Baby's & Toys</a></li>
        <li><a href="">Groceries & Pets</a></li>
        <li><a href="">Health & Beauty</a></li>
      </ul>
    </div>
    <div className='md:hidden'>
      <h3 className='cursor-pointer text-center py-4 text-[var(--secondary-colour3)] text-2xl font-medium'>Categories</h3>
    </div>

    {/* Hero Banner */}
    <div className="flex bg-[var(--dark-bg)] text-[var(--text-colour1)] rounded-xl p-5 md:w-[48rem] ml-14">
      <div className="px-6 pt-10">
        <div className="flex gap-2">
          <img src={apple} alt="" className="w-10" />
          <p className="text-[10px] pt-3">iPhone 14 Series</p>
        </div>

        <h2 className="text-3xl tracking-wider mt-2">
          Up to 10% <br /> off Voucher
        </h2>

        <button className="flex items-center gap-2 p-2 text-white mt-3">
          <span className="underline decoration-2 underline-offset-2 decoration-white">
            Shop Now
          </span>
          <IoArrowForward size={20} />
        </button>
      </div>

      <img src={hero} alt="" className="w-[100px] lg:w-[200px] pl-7 pt-5" />
    </div>

  </div>
</div>

  )
}

export default Hero