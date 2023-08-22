import ItemDetail from './ItemDetail'
import { useContext } from 'react'
import { ListContext } from '../context/ItemListContext'

const ItemDetailContainer = () => {

  const [products] = useContext(ListContext)

  return (
    <>
      <ItemDetail products={products} />
    </>
  )
}

export default ItemDetailContainer