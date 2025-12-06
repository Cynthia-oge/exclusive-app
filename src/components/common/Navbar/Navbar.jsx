import React, { useContext } from 'react'
import { Link } from "react-router-dom";
// import { IoChevronDown } from "react-icons/io5";
import ChevronDown from '../../../assets/icons/DropDown.svg?react'
import { IoSearch } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { ProductContext } from '../../../context/ProductContext';



function Navbar() {
  const {name, cart} = useContext(ProductContext)
  return (
    <div>
        <div className="flex items-center justify-between bg-[var(--dark-bg)] h-10 xl:h-14 text-[#c2dfe5] px-3 md:px-14">
            <div className="flex items-center gap-3 mx-auto text-[clamp(0.375rem, 0.375rem + 0.1389vw, 0.5rem);] ">
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
          
            <ul className='hidden md:flex gap-6'>
              <li><Link to="/">Home</Link></li>
              <li><a href="">Contact</a></li>
              <li><a href="">About</a></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          <p>{name}</p>
          <div className="flex gap-6 relative">
            <input type="search" name="" id="" placeholder='What are you looking for?' className='w-60 h-8 px-4 bg-[var(--secondary-colour1)] outline-none' />
            <IoSearch size={20} className='absolute left-54 top-1' />
            <Link to="wishlist"><IoHeartOutline size={22} className="hidden md:flex cursor-pointer" /></Link>
            <div>
              <span>{cart.length}</span>
              <IoCartOutline size={22} className="hidden md:flex cursor-pointer" />
            </div>
          </div>
          <button className="md:hidden text-2xl">
            ☰
          </button>

        </div>
        <hr className='border-[#ececec]'/>
    </div>
  )
}

export default Navbar