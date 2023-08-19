import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { Text, IconButton, Box, Button, Flex } from '@chakra-ui/react'
import { BsFillCartPlusFill } from "react-icons/bs"
import { useContext, useState } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const ItemCount = ({ id, name, price, stock }) => {

  const [count, setCount] = useState(1)

  const { cart } = useContext(CartContext)

  const add = (e) => {
    count < stock ? setCount(count + 1) : e.preventDefault()
  }

  const subtract = (e) => {
    count > 1 ? setCount(count - 1) : e.preventDefault()
  }

  const addToCart = (e) => {

  }

  return (
    <Box>
      <Flex>
        <IconButton
          onClick={subtract}
          my={3}
          isRound={true}
          variant='solid'
          colorScheme='blue'
          aria-label='Done'
          fontSize='20px'
          icon={<MinusIcon />}
        />

        <Text fontSize={40} textAlign={'center'} fontWeight={600} mx={12}>
          {count}
        </Text>

        <IconButton
          onClick={add}
          my={3}
          isRound={true}
          variant='solid'
          colorScheme='blue'
          aria-label='Done'
          fontSize='20px'
          icon={<AddIcon />}
        />
      </Flex>

      <Text textAlign={'center'} my={3} border={'1px'} borderRadius={'full'}>
        <p>Stock disponible: {stock}</p>
      </Text>

      <Flex>
        <Button
          onClick={addToCart}
          rightIcon={<BsFillCartPlusFill />}
          colorScheme='blue'
          variant='outline'
        >
          Agregar al carrito
        </Button>
      </Flex>

    </Box>

  )
}

export default ItemCount