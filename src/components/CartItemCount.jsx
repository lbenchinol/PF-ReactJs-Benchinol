import { useContext, useEffect, useState } from 'react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { BsFillTrashFill } from "react-icons/bs"
import { CartContext } from '../context/ShoppingCartContext'
import { Box, Button, Flex, IconButton, Text } from '@chakra-ui/react'
import { ListContext } from '../context/ItemListContext'

const CartItemCount = ({ id, quantity }) => {

    const [stock, setStock] = useState(0)

    const { addItem, subtractItem, removeItem } = useContext(CartContext)

    const { products } = useContext(ListContext)

    useEffect(() => {
        products.map((item) => {
            if (item.id === id) {
                setStock(item.stock)
            }
        })
    }, [products])

    const add = () => {
        const item = { id }
        addItem(item, 1)
    }

    const subtract = () => {
        subtractItem(id)
    }

    const remove = () => {
        removeItem(id)
    }

    return (
        <Box key={id}>
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
                    {quantity}
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

                <Button
                    onClick={remove}
                    rightIcon={<BsFillTrashFill />}
                    colorScheme='blue'
                    variant='outline'
                />
            </Flex>

            <Flex>
                <Text textAlign={'center'} my={3} border={'1px'} borderRadius={'full'} p={2}>
                    Stock disponible: {stock}
                </Text>
            </Flex>
        </Box>
    )
}

export default CartItemCount