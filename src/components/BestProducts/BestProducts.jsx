import React, { useContext, useEffect, useState } from 'react'
import BestProductCard from '../BestProductCard/BestProductCard'
import { ProductContext } from '../../context/ProductContext'

const BestProducts = () => {
    //  const [bestProductList, setBestProductList] = useState([])
        
    //       useEffect(() => {
    //         fetch('./best.json')
    //         .then((res) =>{
    //           return res.json()
    //         })
    //         .then((data)=>{
    //           console.log(data)
    //           setBestProductList(data)
    //         })
    //       },[])
    const {productList} = useContext(ProductContext)
  return (
    <div className='mt-5'>
        <div className='flex gap-2 ml-23 '>
            <div className='w-3 h-6 bg-[var(--secondary-colour3)]'></div>
            <p className='text-[var(--secondary-colour3)] text-xs pt-1 font-bold'>This Month</p>
        </div>
        <div className='flex justify-between'>
              <h3 className='text-[18px] font-normal md:text-2xl md:font-medium pt-5 md:ml-20 ml-12'>Best Selling Products</h3>
            
          <div className='hidden md:flex gap-2 mr-18'>
            <button>View All</button>
          </div>
        </div>
      
        <div className="md:ml-20 mt-8">
            <div className="md:grid grid-flow-col auto-cols-max gap-8 overflow-x-auto md:grid-cols-none mx-auto">
              {productList.filter((p) => p.isBestSelling).map((product, i) => (
                <BestProductCard
                  key={i}
                  className={` flex flex-col items-center justify-center text-center`}
                   image={product.image}
                    name={product.name}
                    price={product.price}
                    oldPrice={product.oldPrice}
                    ratingStar={product.ratingStar}
                    rating={product.rating}
                />
              ))}
            </div>
            </div>

        
        
        <hr className=" border-[#ececec] w-[85%] mx-auto mt-8" />


    </div>
  )
}

export default BestProducts