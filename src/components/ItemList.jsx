import React from 'react'
import Item from './Item'
import { Wrap, WrapItem } from '@chakra-ui/react'

const ItemList = ({ products }) => {
  return (
    <Wrap spacing='5px' justify='center'>

      {products.map((p) => {
        return (
          <WrapItem key={p.id}>
            <Item
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              image={p.image}
            />
          </WrapItem>
        )
      })}

    </Wrap>
  )
}

export default React.memo(ItemList)