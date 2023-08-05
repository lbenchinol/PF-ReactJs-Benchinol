import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Text, Center } from '@chakra-ui/react'
import { useParams } from "react-router"
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'


const ItemDetail = ({ products }) => {

  const { id } = useParams()

  const filteredProducts = products.filter((product) => product.id == id)

  return (
    <>
      {filteredProducts.map((p) => {
        return (
          <div key={p.id}>

            <Center >
              <Card maxW='sm' m={2}>
                <CardBody>
                  <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md' textAlign={'center'}>{p.name}</Heading>
                    <Text textAlign={'center'}>
                      {p.description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl' textAlign={'center'}>
                      ${p.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            </Center>
            <Center>
              <ItemCount
                stock={p.stock}
              />
            </Center>

          </div>

        )
      })}
    </>
  )
}

export default ItemDetail