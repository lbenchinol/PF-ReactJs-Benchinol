import React from 'react'
import { Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const Home = () => {

  const [cart, setCart] = useContext(CartContext)

  return (
    <>
      <Text fontSize={100} fontWeight={700} textAlign={'center'}>
        Home!
      </Text>
    </>
  )
}

export default Home