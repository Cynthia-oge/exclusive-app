import { createContext, useEffect, useState } from "react"

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
    const name = 'Cynthia Amdi' 

    const age = 40
    const [cart, setCart] = useState([{}])
    const [productList, setProductList] = useState([])

    useEffect(() =>{
        fetch('/product.json')
        .then((res) =>{
            return res.json()
        })
        .then((data) =>{
            setProductList(data)
        })
    })


    const items = {
        name,
        age,
        cart,
        productList
        
    }
  return (
    <ProductContext.Provider value={items}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider