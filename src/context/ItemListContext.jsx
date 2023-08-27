import { createContext } from "react"
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

export const ListContext = createContext(null)

export const ItemListProvider = ({ children }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const db = getFirestore()
    const itemsCollection = collection(db, 'products')

    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })
        setProducts(docs)
      })
  }, [])

  return (
    <ListContext.Provider value={{ products }}>

      {children}

    </ListContext.Provider>
  )

}

export default ItemListProvider