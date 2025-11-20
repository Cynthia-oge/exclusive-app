import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import apple from '../../assets/images/apple.png';
import hero from '../../assets/images/hero.jpg';

function Hero() {
  return (
    <div className='grid grid-cols-[1fr_2fr] mt-6 ml-26 h-67 gap-1'>
        <div>
            <ul className='leading-7 text-sm'>
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
        <div className='flex bg-[var(--dark-bg)] text-[var(--text-colour1)] w-3xl mr-10'>
            <div className='px-9 pt-12'>
                <div className='flex gap-2'>
                    <img src={apple} alt="" srcset="" className='w-10' />
                    <p className='text-[10px] pt-3'>iPhone 14 Series</p>
                </div>
                <h2 className='text-3xl tracking-wider'>Up to 10% <br /> off Voucher</h2>
                <button className="flex items-center gap-2 p-2 text-white">
                   <span className="underline decoration-solid decoration-2 underline-offset-2 decoration-white">
                        Shop Now
                    </span>
                    <IoArrowForward size={20} />
                </button>
            </div>
            <img src={hero} alt="" srcset="" className='w-86 pl-7 pt-5' />
        </div>
    </div>
  )
}

export default Hero