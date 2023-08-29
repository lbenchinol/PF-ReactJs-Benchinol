import { Box, Icon, Spacer, Flex, Text, Center } from '@chakra-ui/react';
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from '../context/ShoppingCartContext';
import { useContext } from 'react';

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  const quantity = totalQuantity()

  return (
    <Flex p='1' m='2' border='2px' borderRadius='10' color='white'>
      <Box>
        <Icon as={BsFillCartFill} width='20px' height='20px' m={1} />
      </Box>
      <Spacer />
      <Center mb={'4px'} mr={'5px'}>
        <Text w={'18px'} textAlign={'center'}>{quantity}</Text>
      </Center>
    </Flex>
  )
}

export default CartWidget