import { useContext } from 'react'
import { Text } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'


const Cart = () => {

  const { cart } = useContext(CartContext)

  return (
    <>
      <Text fontSize={100} fontWeight={700} textAlign={'center'}>
        Cart!
      </Text>
    </>
  )
}

export default Cart