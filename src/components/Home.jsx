import React from 'react'
import { Text } from '@chakra-ui/react'
import SendOrder from './SendOrder'

const Home = () => {
  return (
    <>
      <Text fontSize={100} fontWeight={700} textAlign={'center'}>
        Home!
      </Text>

      <SendOrder />
      
    </>
  )
}

export default Home