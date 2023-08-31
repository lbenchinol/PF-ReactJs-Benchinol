import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import { Rerousel } from 'rerousel';

const Home = () => {

  const ref = useRef(null);

  const fullHeight = self.innerHeight - 67
  const fullWidth = self.innerWidth

  let innerBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: fullHeight,
    width: fullWidth,
    color: 'white',
  }

  return (
    <Flex h={fullHeight} overflow={'hidden'}>

      <Box position={'absolute'} sx={innerBoxStyles} backdropFilter='auto' backdropBlur='8px'>
        <Text fontSize={'7xl'} fontWeight={'black'} textAlign={'center'} textShadow={'0 0 20px black'}>BIENVENIDO A TERMO STORE!</Text>
      </Box>
      <Rerousel itemRef={ref} interval={5000}>
        <Image ref={ref} minH={fullHeight} fit={'cover'} align={'right'} src='https://firebasestorage.googleapis.com/v0/b/termo-store.appspot.com/o/home%2Fhome_termos.png?alt=media&token=d2f1021e-aa91-4961-a4d2-742cab159a18' />
        <Image minH={fullHeight} fit={'cover'} align={'center'} src='https://firebasestorage.googleapis.com/v0/b/termo-store.appspot.com/o/home%2Fhome_vasos.png?alt=media&token=8bfecedf-e957-4f75-94ee-5fcbd97d6c55' />
        <Image minH={fullHeight} fit={'cover'} align={'center'} src='https://firebasestorage.googleapis.com/v0/b/termo-store.appspot.com/o/home%2Fhome_botella.png?alt=media&token=efa5f3a3-c5c1-47a4-aad1-9f43671c7ef8' />
        <Image minH={fullHeight} fit={'cover'} align={'center'} src='https://firebasestorage.googleapis.com/v0/b/termo-store.appspot.com/o/home%2Fhome_termo.png?alt=media&token=c828d1e4-c974-4461-8fa0-f624dd17f6f2' />
        <Image minH={fullHeight} fit={'cover'} align={'center'} src='https://firebasestorage.googleapis.com/v0/b/termo-store.appspot.com/o/home%2Fhome_botella2.png?alt=media&token=5f6a9829-9c31-40f2-bc02-ceda234ecc39' />

      </Rerousel>
    </Flex>
  )
}

export default Home