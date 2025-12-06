import React, { useEffect, useState } from 'react'
import PrevArrow from '../../assets/icons/prevArrow.svg'
import NextArrow from '../../assets/icons/nextArrow.svg'
import Category from '../Category/Category'

const CategoryDisplay = () => {
    // const [categoryList, setCategoryList] = useState([])
    
    //   useEffect(() => {
    //     fetch('./category.json')
    //     .then((res) =>{
    //       return res.json()
    //     })
    //     .then((data)=>{
    //       console.log(data)
    //       setCategoryList(data)
    //     })
    //   },[])
    const category = [
    {
        name: "Phones",
        icon:"../src/assets/icons/phone.svg"
    },

     {
        name: "Computers",
        icon:"../src/assets/icons/Computer.svg"
    },

     {
        name: "SmartWatch",
        icon:"../src/assets/icons/SmartWatch.svg"
    },

     {
        name: "Camera",
        icon:"../src/assets/icons/camera.svg"
    },

     {
        name: "HeadPhones",
        icon:"../src/assets/icons/HeadPhone.svg"
    },

     {
        name: "Gaming",
        icon:"../src/assets/icons/Gaming.svg"
    }
]
  return (
    <div className='mt-5'>
        <div className='flex gap-2 ml-23 '>
            <div className='w-3 h-6 bg-[var(--secondary-colour3)]'></div>
            <p className='text-[var(--secondary-colour3)] text-xs pt-1 font-bold'>Categories</p>
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
            <div className="grid grid-flow-col auto-cols-max gap-8 overflow-x-auto md:grid-cols-none">
              {category.map((category, i) => (
                <Category
                  key={i}
                  className={`${category.name === "Camera" ? "bg-[var(--secondary-colour3)]" : ""} flex flex-col items-center justify-center text-center`}
                  icon={category.icon}
                  name={category.name}
                />
              ))}
            </div>
            </div>

        
        
        <hr className=" border-[#ececec] w-[85%] mx-auto mt-8" />


    </div>
  )
}

export default CategoryDisplay