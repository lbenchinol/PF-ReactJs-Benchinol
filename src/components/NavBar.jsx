import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Box, Spacer } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
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

            <Box m={1}>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Productos
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link to={`/category/termos`}>Termos</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={`/category/botellas`}>Botellas</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={`/category/vasos`}>Vasos</Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
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