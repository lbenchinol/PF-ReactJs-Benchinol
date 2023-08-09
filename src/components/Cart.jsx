import { useContext } from 'react'
import { Text } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'


const Cart = () => {

  const { cart, setCart } = useContext(CartContext)

  const add = () => {
    setCart(cart + 1)
  }

  const subtract = () => {
    setCart(cart - 1)
  }

  return (
    <>
      <Text fontSize={100} fontWeight={700} textAlign={'center'}>
        Cart!
      </Text>

      <p>{cart}</p>
      <button onClick={add}></button>
      <button onClick={subtract}></button>

    </>
  )
}

export default Cart