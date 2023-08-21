import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Text, Card, Image, CardBody, Heading, Flex, Grid, GridItem } from '@chakra-ui/react'
import SendOrder from './SendOrder'


const Cart = () => {

  const [cart, setCart] = useContext(CartContext)

  return (
    <Grid templateColumns='repeat(6, 1fr)' gap='2'>

      <GridItem colSpan='4' h='auto' bg='aquamarine'>
        {cart.map((p) => {
          return (
            <div key={p.id}>
              <Card
                mx={'30px'}
                my={'5px'}
                p={'5px'}
                border={'1px'}
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
                  <Flex mt={'10px'}>
                    <Text>Precio x unidad: </Text>
                    <Text fontWeight={'semibold'}>${p.price}</Text>
                  </Flex>
                </CardBody>

                {/* --- <CartCount/> ---
                    Resta hasta 1 de items
                    Suma de items hasta max stock
                    Boton de borrar todo el item cart.pop(id)
                */}

              </Card>
            </div>
          )
        })}
      </GridItem>

      <GridItem colSpan='2' h='auto' bg='beige'>
        <Flex>
          Info de la compra y boton de Comprar!

          <SendOrder />

          {/* Boton de "Finalizar compra" redirige hacia Form <EndPurchase/> para agregar datos y enviar a db la orden y restar de la db el stock */}

        </Flex>
      </GridItem>

    </Grid>
  )
}

export default Cart