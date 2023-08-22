import { useParams } from 'react-router'
import ItemList from './ItemList'
import { useContext } from 'react'
import { ListContext } from '../context/ItemListContext'

const ItemListContainer = () => {

  const { category } = useParams()

  const [products] = useContext(ListContext)

  const filteredProducts = products.filter((product) => product.category === category)

  return (
    <>
      {category ? <ItemList products={filteredProducts} /> : <ItemList products={products} />}
    </>
  )
}

export default ItemListContainer