import React from 'react'
import BeatSnoop from '../../assets/images/beatsnoop.jpg'
import GoogleIcon from '../../assets/icons/Icon-Google.svg'

const LogIn = () => {
  return (
     <div className='flex gap-1 h-[500px] justify-around my-8'>
            <div className='hidden md:flex'>
                <img src={BeatSnoop} alt="" srcset="" className='h-[95%] ' />
            </div>
            
            <div>
                <h2 className='text-2xl font-medium pt-13 pb-4'>Log in to Exclusive</h2>
                <p>Enter your details below</p>
                <input type="email/number" placeholder=' Email or Phone Number' className='border-b border-b-[#bfbfbf] w-100 my-5 outline-none' /> <br />
                <input type="password" name="" id="" placeholder='Password' className='border-b border-b-[#bfbfbf] w-100 my-5 outline-none' /> <br />
    
                <div className='flex gap-4 justify-between mt-8'>
                    <button className='text-[var(--text-colour1)] bg-[var(--button2)] w-35 h-15 rounded-[4px]'>Log in</button>
                    <p className='text-[var(--secondary-colour3)] mt-4'>Forgot Password?</p>
                </div>
            </div>
        </div>
  )
}

export default LogIn