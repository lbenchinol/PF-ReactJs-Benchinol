import { Text } from '@chakra-ui/react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <Text
        bgGradient='linear(to-l, #149959, #316A88)'
        bgClip='text'
        fontSize='5xl'
        fontWeight='extrabold'
      >
        {greeting}
      </Text>
    </div>
  )
}

export default ItemListContainer