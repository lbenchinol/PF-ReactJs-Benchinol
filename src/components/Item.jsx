import React from 'react'
import { Card, CardBody, Stack, Heading, Divider, Button, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ name, id, price }) => {
  return (
    <>
      <Card maxW='sm' m={2}>
        <CardBody>
          <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md' textAlign={'center'}>{name}</Heading>
            <Text color='blue.600' fontSize='2xl'  textAlign={'center'}>
              ${price}
            </Text>
            <Button variant='ghost' colorScheme='blue'>
              <Link to={`/item/${id}`}>
                Detalles
              </Link>
            </Button>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </>
  )
}

export default Item