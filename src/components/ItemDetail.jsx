import React from 'react'
import { Card, CardBody, Stack, Heading, Divider, Image, Text, Center } from '@chakra-ui/react'
import { useParams } from "react-router"
import ItemCount from './ItemCount'


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
                    src={p.image}
                    alt={p.name}
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
                id={p.id}
                name={p.name}
                price={p.price}
                stock={p.stock}
              />
            </Center>

          </div>

        )
      })}
    </>
  )
}

export default React.memo(ItemDetail)