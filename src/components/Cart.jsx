import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Text, Card, Image, CardBody, Heading, Flex, Grid, GridItem, Box, Center, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import CartItemCount from './CartItemCount'

const Cart = () => {

  const { cart, totalPrice } = useContext(CartContext)

  const total = totalPrice()
  
  return (
    <Grid templateColumns='repeat(6, 1fr)' gap='2' mt='30px'>
      <GridItem colSpan='4' h='auto'>
        {cart.map((p) => {
          return (
            <div key={p.id}>
              <Card
                mx='30px'
                mb='10px'
                p='5px'
                border='1px'
                boxShadow='lg'
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='unstyled'
              >
                <Image
                  objectFit='contain'
                  maxH={{ base: '100%', sm: '80px' }}
                  src={p.image}
                  alt={p.name}
                />
                <CardBody>
                  <Heading size='md'>{p.name}</Heading>
                  <Flex mt='10px'>
                    <Text>Precio x unidad</Text>
                    <Text fontWeight='semibold'>: ${p.price}</Text>
                  </Flex>
                </CardBody>

                <CartItemCount
                  key={p.id}
                  id={p.id}
                  quantity={p.quantity}
                />
              </Card>
            </div>
          )
        })}
      </GridItem>

      <GridItem colSpan='2' h='auto'>
        <Box mr='20px' p='20px' border='2px' borderRadius='lg' boxShadow='lg'>
          <Center fontSize='2xl' as='b' borderBottom='1px'>Resúmen de compra</Center>
          <Box my='10px'>
            <Text fontSize='xl'>Envío: Gratis</Text>
            <Text fontSize='xl' as='b'>Total: ${total}</Text>
          </Box>
          <Center mt='20px'>
            <Link to={'/checkout'}>
              <Button colorScheme='blue' variant='solid' size='sm'>Finalizar compra</Button>
            </Link>
          </Center>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default Cart