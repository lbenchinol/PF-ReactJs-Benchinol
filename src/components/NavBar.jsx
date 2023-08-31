import { Flex, Box, Spacer, Text, Image } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const logo = 'https://firebasestorage.googleapis.com/v0/b/termo-store.appspot.com/o/Logo-TS.png?alt=media&token=c2afd14d-ab1d-41f4-96bf-f64bc31c7ceb'

    return (
        <Flex align="center" justify="center">
            <Box m={2} mx='3'>
                <Link to={`/`}>
                    <Image src={logo} alt="Logo Termo Store" width='100px' height='50px' />
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