import { Box, Icon, Spacer, Flex } from '@chakra-ui/react';
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from '../context/ShoppingCartContext';
import { useContext } from 'react';

const CartWidget = () => {

  const [cart, setCart] = useContext(CartContext)

  return (
    <Flex p='1' m='2' border='2px' borderRadius='10' color='white'>
      <Box>
        <Icon as={BsFillCartFill} width='20px' height='20px' m={1} />
      </Box>
      <Spacer />
      <Box m={1}>
        <p>{cart.length}</p>
      </Box>
    </Flex>
  )
}

export default CartWidget

// import Card from '@mui/joy/Card'
{/* <Card
  color="neutral"
  orientation="horizontal"
  size="sm"
  variant="soft"
/> */}