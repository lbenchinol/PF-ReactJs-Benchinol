import { createContext } from 'react'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {

    const cart = []

    return (

        <CartContext.Provider value={cart}>

            {children}

        </CartContext.Provider>

    )
}

export default ShoppingCartProvider