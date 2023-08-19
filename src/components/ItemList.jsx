import React from 'react'
import Item from './Item'
import { Flex } from '@chakra-ui/react'

const ItemList = ({ products }) => {
  return (
    <Flex justifyContent={'space-around'}>

      {products.map((p) => {
        return (
            <Item
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              image={p.image}
            />
        )
      })}

    </Flex>
  )
}

export default React.memo(ItemList)