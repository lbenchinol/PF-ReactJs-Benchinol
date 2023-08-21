import { createContext, useEffect } from 'react'
import { useState } from 'react'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {

    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
    const [cart, setCart] = useState(cartFromLocalStorage)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (

        <CartContext.Provider value={[cart, setCart]}>

            {children}

        </CartContext.Provider>

    )
}

export default ShoppingCartProvider