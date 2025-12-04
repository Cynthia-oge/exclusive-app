import React, { useEffect, useState } from 'react'
import PrevArrow from '../../assets/icons/prevArrow.svg'
import NextArrow from '../../assets/icons/nextArrow.svg'
import ExploreCard from '../ExploreCard/ExploreCard'

const Explore = () => {
    const [productList, setProductList] = useState([])
    
      useEffect(() => {
        fetch('./explore.json')
        .then((res) =>{
          return res.json()
        })
        .then((data)=>{
          console.log(data)
          setProductList(data)
        })
      },[])
  return (
    <div className='mt-5'>
        <div className='flex gap-2 ml-23 '>
            <div className='w-3 h-6 bg-[var(--secondary-colour3)]'></div>
            <p className='text-[var(--secondary-colour3)] text-xs pt-1 font-bold'>Our Products</p>
        </div>
        <div className='flex justify-between'>
              <h3 className='text-[18px] font-normal md:text-2xl md:font-medium pt-5 md:ml-20 ml-12'>Browse By Category</h3>
            
          <div className='hidden md:flex gap-2 mr-18'>
            <div className='w-7 h-7 rounded-full bg-[var(--secondary-colour1)]'>
              <img src={PrevArrow} alt="" srcset="" className='mx-auto w-3 pt-2' />
            </div>
            <div className='w-7 h-7 rounded-full bg-[var(--secondary-colour1)]'>
              <img src={NextArrow} alt="" srcset="" className='mx-auto w-3 pt-2' />
            </div>
          </div>
        </div>
      
        <div className="md:ml-20 mt-8">
            <div className="md:grid grid-cols-4 gap-4">
              {productList.map((product, i) => (
                <ExploreCard
                   key={i}
                image={product.image}
                name={product.name}
                price={product.price}
                discountPercent={product.discountPercent}
                ratingStar={product.ratingStar}
                rating={product.rating}
                />
              ))}
            </div>
            </div>

         <div>
        <button className='text-[var(--text-colour1)] bg-[var(--button2)] w-45 h-10 text-[13px] align-middle items-center block mx-auto rounded-[3px] my-5'>View All Products</button>
        </div>
        
        <hr className=" border-[#ececec] w-[85%] mx-auto mt-8 mb-6" />


    </div>
  )
}

export default Explore