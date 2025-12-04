import React from 'react'
import DeliveryVan from '../../assets/icons/icon-delivery.svg?react';
import Customer from '../../assets/icons/Icon-Customer.svg?react';
import Secure from '../../assets/icons/Icon-secure.svg?react';

const Services = () => {
  return (
   <div className="my-16 flex flex-col md:flex-row justify-center items-center md:gap-18 gap-6">
  {/* Item 1 */}
  <div className="flex flex-col items-center text-center">
    <div className="h-13 w-13 rounded-full bg-[var(--secondary-colour1)] pt-2 flex justify-center items-center">
      <div className="w-10 h-10 rounded-full bg-black flex justify-center items-center">
        <DeliveryVan className="w-8" />
      </div>
    </div>
    <div className="mt-2">
      <p className="font-bold">FREE AND FAST DELIVERY</p>
      <p>Free delivery for all orders over $140</p>
    </div>
  </div>

  {/* Item 2 */}
  <div className="flex flex-col items-center text-center">
    <div className="h-13 w-13 rounded-full bg-[var(--secondary-colour1)] pt-2 flex justify-center items-center">
      <div className="w-10 h-10 rounded-full bg-black flex justify-center items-center">
        <Customer className="w-8" />
      </div>
    </div>
    <div className="mt-2">
      <p className="font-bold">24/7 CUSTOMER SERVICE</p>
      <p>Friendly 24/7 customer support</p>
    </div>
  </div>

  {/* Item 3 */}
  <div className="flex flex-col items-center text-center">
    <div className="h-13 w-13 rounded-full bg-[var(--secondary-colour1)] pt-2 flex justify-center items-center">
      <div className="w-10 h-10 rounded-full bg-black flex justify-center items-center">
        <Secure className="w-8" />
      </div>
    </div>
    <div className="mt-2">
      <p className="font-bold">MONEY BACK GUARANTEE</p>
      <p>We reurn money within 30 days</p>
    </div>
  </div>
</div>

  )
}

export default Services