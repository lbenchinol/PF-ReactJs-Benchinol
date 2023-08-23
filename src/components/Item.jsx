import { Card, CardBody, Stack, Heading, Divider, Button, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ name, id, price, image }) => {
  return (
    <>
      <Card maxW='sm' m={2}>
        <CardBody>
          <Image
            src={image}
            alt={name}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md' textAlign={'center'}>{name}</Heading>
            <Text color='blue.600' fontSize='2xl' textAlign={'center'}>
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