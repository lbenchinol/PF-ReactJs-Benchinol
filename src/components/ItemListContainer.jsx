import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import ItemList from './ItemList'
import { useContext, useEffect, useState } from 'react'
import { ListContext } from '../context/ItemListContext'
import { Grid, GridItem, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import SkeletonCards from './SkeletonCards'

const ItemListContainer = () => {

  const { category } = useParams()

  const { products, loaded } = useContext(ListContext)

  const [value, setValue] = useState('products')

  const navigate = useNavigate()

  const filteredProducts = products.filter((product) => product.category === category)

  useEffect(() => {

    if (value === 'products') {
      navigate("/products")
    } else {
      navigate(`/category/${value}`)
    }

  }, [value])

  if (loaded) {
    return (
      <Grid templateColumns='repeat(12, 1fr)' gap={1}>
        <GridItem colSpan={2}>
          <RadioGroup onChange={setValue} value={value} border='1px' borderRadius='lg' mt={10} ml={10} py={4} px={6} shadow='md'>
            <Stack direction='column'>
              <Text fontWeight='bold' align='center' borderBottom='1px' pb='8px'>Filtros</Text>
              <Radio value='products'>Todos los productos</Radio>
              <Radio value='termos'>Termos</Radio>
              <Radio value='botellas'>Botellas</Radio>
              <Radio value='vasos'>Vasos</Radio>
            </Stack>
          </RadioGroup>
        </GridItem>

        <GridItem colSpan={10}>
          {category ? <ItemList products={filteredProducts} /> : <ItemList products={products} />}
        </GridItem>
      </Grid>
    )
  } else {
    return <SkeletonCards />
  }

}

export default ItemListContainer