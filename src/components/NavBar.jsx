import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Box, Spacer } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import Logo from '../assets/Logo-TS.png'

const NavBar = () => {
    return (
        <Flex align="center" justify="center">
            <Box m={2} mx='3'>
                <img src={Logo} alt="Logo Termo Store" width='100px' height='50px'/>
            </Box>
            <Box m={1}>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Productos
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Termos grandes</MenuItem>
                        <MenuItem>Termos medianos</MenuItem>
                        <MenuItem>Termos pequeños</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box mr='5'>
                <CartWidget />
            </Box>
        </Flex>
    )
}

export default NavBar