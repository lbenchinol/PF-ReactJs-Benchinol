import { Flex, Box, Spacer, Text } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import Logo from '../assets/Logo-TS.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Flex align="center" justify="center">
            <Box m={2} mx='3'>
                <Link to={`/`}>
                    <img src={Logo} alt="Logo Termo Store" width='100px' height='50px' />
                </Link>
            </Box>

            <Box ml={5}>
                <button className='navProductBtn'>
                    <Link to={`/products`}>
                        <Text fontSize='lg' fontWeight='bold' textColor='whiteAlpha.900' p={5} sx={{ '.navProductBtn:hover &': { backgroundColor: 'whiteAlpha.300' } }}>Productos</Text>
                    </Link>
                </button>
            </Box>

            <Spacer />

            <Box mr='5'>
                <Link to={`/cart`}>
                    <CartWidget />
                </Link>
            </Box>
        </Flex>
    )
}

export default NavBar