import { Box } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'
import Cart from './components/Cart'
import ShoppingCartContext from './context/ShoppingCartContext'
import { useEffect, useState } from 'react'
import Loading from './components/Loading'

const App = () => {

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])


  if (loading) {
    return <Loading />
  }



  return (

    <BrowserRouter>

      <ShoppingCartContext>

        <Box bg='#4193bf'>
          <NavBar />
        </Box>

        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/category/:category' element={<ItemListContainer />} />
          <Route exact path='/all' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />

        </Routes>

      </ShoppingCartContext>

    </BrowserRouter>

  )
}

export default App