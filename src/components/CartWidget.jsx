import { Box, Icon, Spacer, Flex } from '@chakra-ui/react';
import { BsFillCartFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <Flex>
      <Box>
        <Icon as={BsFillCartFill} width='20px' height='20px' />
      </Box>
      <Spacer />
      <Box>
        <p>5</p>
      </Box>
    </Flex>
  )
}

export default CartWidget