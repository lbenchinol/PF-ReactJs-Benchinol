import { Box } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import ShoppingCartProvider from './context/ShoppingCartContext'
import ItemListProvider from './context/ItemListContext'

const App = () => {

  return (

    <BrowserRouter>

      <ItemListProvider>

        <ShoppingCartProvider>

          <Box bg='#4193bf'>
            <NavBar />
          </Box>

          <Routes>

            <Route exact path='/' element={<Home />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/category/:category' element={<ItemListContainer />} />
            <Route exact path='/products' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/checkout' element={<Checkout />} />

          </Routes>

        </ShoppingCartProvider>

      </ItemListProvider>

    </BrowserRouter>

  )
}

export default App