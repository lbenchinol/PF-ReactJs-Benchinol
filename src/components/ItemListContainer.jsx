import { useParams } from 'react-router'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'


const ItemListContainer = () => {

  const { category } = useParams()

  const [products, setProducts] = useState([])

  useEffect(() => {

    const db = getFirestore()

    const itemsCollection = collection(db, 'products')

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProducts(docs)
    })

  }, [])

  /* const getProducts = new Promise((resolve, reject) => {
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
    }) */

  const filteredProducts = products.filter((product) => product.category === category)

  return (
    <>
      {category ? <ItemList products={filteredProducts} /> : <ItemList products={products} />}
    </>
  )
}

export default ItemListContainer