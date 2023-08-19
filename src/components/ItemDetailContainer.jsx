import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'


const ItemDetailContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const db = getFirestore()

    const itemsCollection = collection(db, 'products')

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProducts(docs)
    })

  }, [])

/*   const getProducts = new Promise((resolve, reject) => {
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

  return (
    <>
      <ItemDetail products={products} />
    </>
  )
}

export default ItemDetailContainer