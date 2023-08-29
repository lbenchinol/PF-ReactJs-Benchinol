import ItemDetail from './ItemDetail'
import ProductNotFound from './ProductNotFound'
import { useContext } from 'react'
import { ListContext } from '../context/ItemListContext'
import { useParams } from "react-router"

const ItemDetailContainer = () => {

  const { products } = useContext(ListContext)

  const { id } = useParams()

  const checkId = products.find((p) => p.id === id)

  const filteredProduct = products.filter((product) => product.id === id)

  return (
    <>
      {checkId ? <ItemDetail filteredProduct={filteredProduct} /> : <ProductNotFound />}
    </>
  )
}

export default ItemDetailContainer