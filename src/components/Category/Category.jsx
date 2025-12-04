import React from 'react'

const Category = ({icon, name, className}) => {
  return (
    <div className={`w-40 h-25 border border-[#ececec] mx-auto ${className}`}>
        <img src={icon} alt="" srcset="" />
        <p>{name}</p>
    </div>
  )
}

export default Category