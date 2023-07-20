import { Box, Icon, Spacer, Flex } from '@chakra-ui/react';
import { BsFillCartFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <Flex p='1' m='2' border='2px' borderRadius='10' color='white'>
      <Box>
        <Icon as={BsFillCartFill} width='20px' height='20px' m={1}/>
      </Box>
      <Spacer />
      <Box m={1}>
        <p>5</p>
      </Box>
    </Flex>
  )
}

export default CartWidget