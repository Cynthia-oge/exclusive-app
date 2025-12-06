import React, { useEffect, useState } from 'react'
import WishListCard from '../../components/WishListCard/WishListCard'
import { DiVim } from 'react-icons/di'
import ProductCard from '../../components/ProductCard/ProductCard'

const WishList = () => {
    const [wishList, setWishList] = useState([])
     const [productList, setProductList] = useState([])
    
            
    useEffect(() => {
        fetch('./product.json')
    .then((res) =>{
         return res.json()
        })
    .then((data)=>{
         console.log(data)
        setWishList(data)
        })
    },[])

    
      useEffect(() => {
        fetch('./product.json')
        .then((res) =>{
          return res.json()
        })
        .then((data)=>{
          setProductList(data)
        })
      },[])
  return (
    <div className='mt-10'>
        <div className='flex justify-between mx-17 mb-10'>
            <p>WishList (4)</p>
            <button className='py-2 w-40 border border-[#bfbfbf] font-medium text-[13px]'>Move All To Bag</button>
        </div>

         <div className="md:ml-20 mt-8">
            <div className="md:grid grid-flow-col auto-cols-max gap-8 overflow-x-auto md:grid-cols-none mx-auto">
              {wishList.map((product, i) => (
                <WishListCard
                  key={i}
                  className={` flex flex-col items-center justify-center text-center`}
                   image={product.image}
                    name={product.name}
                    price={product.price}
                    oldPrice={product.oldPrice}
                />
              ))}
            </div>
            </div>

            <div className='flex justify-between mt-16 mx-17'>
                <div className='flex gap-2  '>
                    <div className='w-3 h-6 bg-[var(--secondary-colour3)]'></div>
                    <p className='text-[var(--secondary-colour3)] text-xs pt-1 font-bold'>Just For You</p>
                </div>
                <div>
                    <button className='py-2 w-30 border border-[#bfbfbf] font-medium text-[13px]'>See All</button>
                </div>
            </div>
            <div className="md:grid grid-flow-col auto-cols-max gap-8 overflow-x-auto md:grid-cols-none mx-21 mb-16">
                {productList.slice(0, 4).map((product, i) => (
                <ProductCard key={i} product={product}
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
  )
}

export default WishList