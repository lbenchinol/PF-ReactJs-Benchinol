import { useParams } from "react-router"
import ItemCount from './ItemCount'

const ItemDetail = () => {

  const { id } = useParams()

  const filteredProducts = products.filter((product) => product.id == id)

  return (
    <>
      {filteredProducts.map((p) => {
        return (
          <div key={p.id}>
            {p.name}
            {p.description}
            {p.category}
            <ItemCount />
          </div>
        )
      })}
    </>
  )
}

export default ItemDetail