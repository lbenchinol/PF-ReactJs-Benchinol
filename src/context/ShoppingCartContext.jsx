import { createContext, useEffect } from 'react'
import { useState } from 'react'

export const CartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
    const [cart, setCart] = useState(cartFromLocalStorage)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addItem = (item, newQuantity) => {
        setCart((itemsOnCart) => {
            const isItemOnCart = cart.find((it) => it.id === item.id)
            if (isItemOnCart) {
                return itemsOnCart.map((i) => {
                    if (i.id === item.id) {
                        return { ...i, quantity: i.quantity + newQuantity }
                    }
                })
            } else {
                return [...itemsOnCart, { ...item, quantity: newQuantity }]
            }
        })
    }

    const subtractItem = (id) => {
        setCart((itemsOnCart) => {
            return itemsOnCart.map((i) => {
                if (i.id === id) {
                    if (i.stock > 1) {
                        return [...itemsOnCart, { ...i, quantity: quantity - 1 }]
                    }
                }
            })
        })
    }

    const removeItem = (id) => {
        const newCart = cart.filter(p => p.id !== id)
        setCart(newCart)
    }

    return (

        <CartContext.Provider value={{ cart, addItem, subtractItem, removeItem }}>

            {children}

        </CartContext.Provider>

    )
}

export default ShoppingCartProvider