import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const products = [
    { id: 1, name: "Producto A", description: "Descripcionde Producto A", stock: 10, category: "cat1" },
    { id: 2, name: "Producto B", description: "Descripcionde Producto B", stock: 5, category: "cat2" },
    { id: 3, name: "Producto C", description: "Descripcionde Producto C", stock: 50, category: "cat3" },
    { id: 4, name: "Producto D", description: "Descripcionde Producto D", stock: 30, category: "cat1" },
    { id: 5, name: "Producto E", description: "Descripcionde Producto E", stock: 100, category: "cat3" },
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

  return (
    <>
      <ItemDetail products={products} />
    </>
  )
}

export default ItemDetailContainer