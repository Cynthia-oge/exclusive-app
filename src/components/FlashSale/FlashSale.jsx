import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import PrevArrow from '../../assets/icons/prevArrow.svg'
import NextArrow from '../../assets/icons/nextArrow.svg'
import { ProductContext } from '../../context/ProductContext'

function FlashSale() {
  // const [productList, setProductList] = useState([])

  // useEffect(() => {
  //   fetch('./product.json')
  //   .then((res) =>{
  //     return res.json()
  //   })
  //   .then((data)=>{
  //     console.log(data)
  //     setProductList(data)
  //   })
  // },[])

  const {productList} = useContext(ProductContext)
  return (
    <div className='mt-5'>
        <div className='flex gap-2 ml-23 '>
            <div className='w-3 h-6 bg-[var(--secondary-colour3)]'></div>
            <p className='text-[var(--secondary-colour3)] text-xs pt-1 font-bold'>Today's</p>
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-4'>
              <h3 className='text-[18px] font-normal md:text-2xl md:font-medium pt-5 md:ml-20 ml-12'>Flash Sales</h3>
              <div className='flex gap-2'>
                  <p><span className='text-[11px]'>Days</span> <br /> <span className='text-[18px] md:text-[20px] font-medium'>03</span> <span className='text-[var(--secondary-colour3)]'>:</span> </p>
                  <p><span className='text-[11px]'>Hours</span> <br /> <span className='text-[18px] md:text-[20px] font-medium'>23</span> <span className='text-[var(--secondary-colour3)]'>:</span> </p>
                  <p><span className='text-[11px]'>Minutes</span> <br /> <span className='text-[18px] md:text-[20px] font-medium'>19</span> <span className='text-[var(--secondary-colour3)]'>:</span> </p>
                  <p><span className='text-[11px]'>Seconds</span> <br /> <span className='text-[18px] md:text-[20px] font-medium'>56</span> <span className='text-[var(--secondary-colour3)]'>:</span> </p>
              </div>
          </div>
          <div className='hidden md:flex gap-2 mr-18'>
            <div className='w-7 h-7 rounded-full bg-[var(--secondary-colour1)]'>
              <img src={PrevArrow} alt="" srcset="" className='mx-auto w-3 pt-2' />
            </div>
            <div className='w-7 h-7 rounded-full bg-[var(--secondary-colour1)]'>
              <img src={NextArrow} alt="" srcset="" className='mx-auto w-3 pt-2' />
            </div>
          </div>
        </div>
       <div className="overflow-x-auto md:ml-20 hideScrollbar ">
          <div className="md:grid grid-flow-col auto-cols-max gap-8 md:grid-cols-none">
            {productList.filter((p) => p.isMainProduct).map((product, i) => (
              <ProductCard 
                key={i}
                image={product.image}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
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
        <hr className=" border-[#ececec] w-[85%] mx-auto mt-8" />


    </div>
  )
}

export default FlashSale