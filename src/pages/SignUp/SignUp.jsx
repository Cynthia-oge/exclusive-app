import React from 'react'
import { Link } from "react-router-dom";
import BeatSnoop from '../../assets/images/beatsnoop.jpg'
import GoogleIcon from '../../assets/icons/Icon-Google.svg'

const SignUp = () => {
  return (
    <div className='flex gap-1 h-[500px] justify-around my-8'>
        <div className='hidden lg:flex'>
            <img src={BeatSnoop} alt="" srcset="" className='h-[95%] ' />
        </div>
        
        <div>
            <h2 className='text-2xl font-medium pt-13 pb-4'>Create an account</h2>
            <p>Enter your details below</p>
            <input type="text" placeholder='Name' className='border-b border-b-[#bfbfbf] w-70 md:w-100 my-4 outline-none' /> <br /> 
            <input type="email/number" placeholder=' Email or Phone Number' className='border-b border-b-[#bfbfbf] w-70 md:w-100 my-4 outline-none' /> <br />
            <input type="password" name="" id="" placeholder='Password' className='border-b border-b-[#bfbfbf] w-70 md:w-100 my-4 outline-none' /> <br />
            <div>
                <button className='text-[var(--text-colour1)] bg-[var(--button2)] w-50 md:w-100 h-10 text-[13px] align-middle items-center block mx-auto rounded-[3px] my-5'>Create Account</button>
            </div>

             <div className='flex justify-center gap-2 w-50 md:w-100 h-10 text-[13px] align-middle items-center mx-auto rounded-[3px] my-5 border py-6 border-[#bfbfbf]'>
                   <a href=""> <img src={GoogleIcon} alt="" srcset="" /></a>
                    <a href="" className='text-black text-[17px]'>Sign up with Google</a>
            </div>
            <div className='flex gap-2 justify-center'>
                <p>Already have account?</p>
                <button className='underline'><Link to="/login">Log in</Link></button>
            </div>
        </div>
    </div>
  )
}

export default SignUp