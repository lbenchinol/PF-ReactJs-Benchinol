import { useContext, useEffect, useState } from 'react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { BsFillTrashFill } from "react-icons/bs"
import { CartContext } from '../context/ShoppingCartContext'
import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
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
        <Box key={id} mr={'8px'}>
            <Flex>
                <IconButton
                    onClick={subtract}
                    my={3}
                    isRound={true}
                    variant='solid'
                    colorScheme='blue'
                    aria-label='Done'
                    fontSize='xs'
                    icon={<MinusIcon />}
                    size={'xs'}
                />

                <Text fontSize={'xl'} textAlign={'center'} fontWeight={600} mt={'8px'} mx={12} w={'20px'}>
                    {quantity}
                </Text>

                <IconButton
                    onClick={add}
                    my={3}
                    isRound={true}
                    variant='solid'
                    colorScheme='blue'
                    aria-label='Done'
                    fontSize='xs'
                    icon={<AddIcon />}
                    size={'xs'}
                />
            </Flex>

            <Flex>
                <Text textAlign={'center'} my={3} border={'1px'} borderRadius={'full'} p={1} fontSize={'xs'} fontWeight={'semibold'}>
                    Stock disponible: {stock}
                </Text>

                <IconButton
                    onClick={remove}
                    icon={<BsFillTrashFill />}
                    colorScheme='blue'
                    variant='outline'
                    size={'sm'}
                    mt={'10px'}
                    ml={'14px'}
                />
            </Flex>
        </Box>
    )
}

export default CartItemCount