import React from 'react'
// import { IoChevronDown } from "react-icons/io5";
import ChevronDown from '../../../assets/icons/DropDown.svg'
import { IoSearch } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";



function Navbar() {
  return (
    <div>
        <div className="flex items-center justify-between bg-[var(--dark-bg)] h-[48px] text-[#c2dfe5] px-14 ">
            <div className="flex items-center gap-3 mx-auto text-[clamp(0.5rem, 0.5rem + 0.5556vw, 1rem)] ">
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%</p>
                <button>ShopNow</button>
            </div>
            <button className='flex items-center gap-1'>English
              <ChevronDown />
        </button>
        </div>

        <div className="bg-[var(--primary-bg)] flex justify-around items-center pt-6 pb-3">
          <div className="logo">
            <h1 className='text-2xl font-semibold'>Exclusive</h1>
          </div>
          <div className="">
            <ul className='flex gap-6'>
              <li><a href="">Home</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Sign Up</a></li>
            </ul>
          </div>
          <div className="flex gap-6 relative">
            <input type="search" name="" id="" placeholder='What are you looking for?' className='w-60 h-8 px-4 bg-[var(--secondary-colour1)] outline-none' />
            <IoSearch size={20} className='absolute left-54 top-1' />
            <IoHeartOutline size={22} className="cursor-pointer" />
            <IoCartOutline size={22} className="cursor-pointer" />

          </div>
        </div>
        <hr color='#f5f5f5'/>
    </div>
  )
}

export default Navbar