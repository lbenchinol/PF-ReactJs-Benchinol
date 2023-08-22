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
                        if ((i.quantity + newQuantity) <= i.stock) {
                            return { ...i, quantity: i.quantity + newQuantity }
                        } else {
                            return i
                        }
                    } else {
                        return i
                    }
                })
            } else {
                if (newQuantity <= item.stock) {
                    return [...itemsOnCart, { ...item, quantity: newQuantity }]
                } else {
                    return itemsOnCart
                }
            }
        })
    }

    const subtractItem = (id) => {
        setCart((itemsOnCart) => {
            return itemsOnCart.map((i) => {
                if (i.id === id) {
                    if (i.quantity > 1) {
                        return { ...i, quantity: i.quantity - 1 }
                    } else {
                        return i
                    }
                } else {
                    return i
                }
            })
        })
    }

    const removeItem = (id) => {
        const newCart = cart.filter(p => p.id !== id)
        setCart(newCart)
    }

    const totalPrice = () => {
        return cart.reduce((acum, curr) => {
            return acum + (curr.quantity * curr.price)
        }, 0)
    }

    const totalQuantity = () => {
        return cart.reduce((acum, curr) => {
            return acum + (curr.quantity)
        }, 0)
    }

    return (

        <CartContext.Provider value={{ cart, addItem, subtractItem, removeItem, totalPrice, totalQuantity }}>

            {children}

        </CartContext.Provider>

    )
}

export default ShoppingCartProvider