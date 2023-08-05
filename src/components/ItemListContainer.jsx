import { useParams } from 'react-router'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const { category } = useParams()

  const products = [
    { id: 1, name: "Termo 2L", description: "Descripcion de Termo 2L", stock: 20, category: "termos", price: 400 },
    { id: 2, name: "Termo 1.5L", description: "Descripcion de Termo 1.5L", stock: 10, category: "termos", price: 300 },
    { id: 3, name: "Termo 800ml", description: "Descripcion de Termo 800ml", stock: 5, category: "termos", price: 250 },
    { id: 4, name: "Botella térmica 1L", description: "Descripcion de Botella térmica 1L", stock: 50, category: "botellas", price: 270 },
    { id: 5, name: "Botella térmica 750ml", description: "Descripcion de Botella térmica 750ml", stock: 30, category: "botellas", price: 230 },
    { id: 6, name: "Botella térmica con pico 750ml", description: "Descripcion de Botella térmica con pico 750ml", stock: 100, category: "botellas", price: 250 },
    { id: 7, name: "Botella térmica con pico 500ml", description: "Descripcion de Botella térmica con pico 500ml", stock: 70, category: "botellas", price: 220 },
    { id: 8, name: "Vaso térmico 500ml", description: "Descripcion de Vaso térmico 500ml", stock: 80, category: "vasos", price: 150 },
    { id: 9, name: "Vaso térmico 250ml", description: "Descripcion de Vaso térmico 250ml", stock: 30, category: "vasos", price: 100 },
  ]

  const getProducts = new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products)
      }, 2000)
    } else {
      reject(new Error("No hay datos"))
    }
  })

  getProducts
    .then((res) => {
    })
    .catch((error) => {
      console.log(error)
    })

  const filteredProducts = products.filter((product) => product.category === category)

  return (
    <>
      <ItemList products={filteredProducts} />
    </>
  )
}

export default ItemListContainer