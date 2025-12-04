import React from 'react'
import SendIcon from '../../../assets/icons/icon-send.svg?react'
import Qrcode from '../../../assets/images/Qrcode.jpg'
import GooglePlay from '../../../assets/images/GooglePlay.png'
import AppStore from '../../../assets/images/AppStore.png'
import FacebookIcon from '../../../assets/icons/Icon-Facebook.svg?react'
import InstagramIcon from '../../../assets/icons/instagram-icon.svg?react'
import TwitterIcon from '../../../assets/icons/twitter-icon.svg?react'
import LinkedlnIcon from '../../../assets/icons/linkedln-icon.svg?react'
import CopyRight from '../../../assets/icons/copyright.svg?react'

const Footer = () => {
  return (
    <div className='bg-black text-[var(--text-colour1)]'>
         <div className=" flex flex-col md:flex-row justify-center md:justify-center items-start gap-10 md:gap-20 px-6 py-10">

              {/* Exclusive Section */}
              <div>
                    <h2 className="py-4 font-medium">Exclusive</h2>
                    <ul className="text-[13px] leading-[28px]">
                      <li><a href="">Subscribe</a></li>
                      <li><a href="">Get 10% off your first order</a></li>
                    </ul>

                    <div className="flex relative mt-4">
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="border rounded-[3px] text-[12px] px-3 h-8 w-40 bg-transparent outline-none"
                      />
                      <SendIcon className="absolute right-2 top-1 w-5 text-white cursor-pointer" />
                    </div>
              </div>

              {/* Support Section */}
              <div>
                    <h2 className="py-4 font-medium">Support</h2>
                    <ul className="text-[13px] leading-[28px]">
                      <li><a href="">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</a></li>
                      <li><a href="">exclusive@gmail.com</a></li>
                      <li><a href="">+88015-88888-9999</a></li>
                    </ul>
                  </div>

                  {/* Account Section */}
                  <div>
                    <h2 className="py-4 font-medium">Account</h2>
                    <ul className="text-[13px] leading-[28px]">
                      <li><a href="">My Account</a></li>
                      <li><a href="">Login / Register</a></li>
                      <li><a href="">Cart</a></li>
                      <li><a href="">Wishlist</a></li>
                      <li><a href="">Shop</a></li>
                    </ul>
              </div>

              {/* Quick Link Section */}
              <div>
                    <h2 className="py-4 font-medium">Quick Link</h2>
                    <ul className="text-[13px] leading-[28px]">
                      <li><a href="">Privacy Policy</a></li>
                      <li><a href="">Terms Of Use</a></li>
                      <li><a href="">FAQ</a></li>
                      <li><a href="">Contact</a></li>
                    </ul>
              </div>

              {/* Download App Section */}
              <div>
                    <h2 className="py-4 font-medium">Download App</h2>

                    <ul className="text-[13px] leading-[28px] mb-4">
                      <li><a href="">Save $3 with App New User Only</a></li>
                    </ul>

                    {/* QR + App badges on ONE ROW */}
                    <div className="flex items-center gap-1">
                      {/* QR Code */}
                      <img 
                        src={Qrcode} 
                        alt="QR Code" 
                        className="h-[70px] w-auto object-contain"
                      />

                      {/* Google Play + App Store Buttons */}
                      <div className="flex flex-col gap-1">
                        <img 
                          src={GooglePlay} 
                          alt="Google Play" 
                          className="h-[50px] w-auto object-contain my-0"
                        />
                        <img 
                          src={AppStore} 
                          alt="App Store" 
                          className="h-[50px] w-auto object-contain my-0"
                        />
                      </div>
                </div>

                {/* Social Icons */}
                  <div className="flex gap-4 mt-6 text-white">
                    <FacebookIcon className="cursor-pointer" />
                    <TwitterIcon className="cursor-pointer" />
                    <InstagramIcon className="cursor-pointer" />
                    <LinkedlnIcon className="cursor-pointer" />
                  </div>
              </div>

      </div>
      <div className='flex justify-center gap-2 pb-8'>
        <CopyRight className='mt-1' />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
</div>


  )
}

export default Footer