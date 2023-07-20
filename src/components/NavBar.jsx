import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Box, Spacer } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import Logo from '../assets/Logo-TS.png'

const NavBar = () => {
    return (
        <Flex>
            <Box>
                <img src={Logo} alt="Logo Termo Store" width='50px' height='50px'/>
            </Box>
            <Box>
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
            <Box>
                <CartWidget />
            </Box>
        </Flex>
    )
}

export default NavBar