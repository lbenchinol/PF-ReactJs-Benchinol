import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    return (

        <CartContext.Provider value={{cart,setCart}}>

            {children}

        </CartContext.Provider>

    )
}

export default ShoppingCartProvider