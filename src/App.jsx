import { Box } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'
import Cart from './components/Cart'


const App = () => {
  return (
    <BrowserRouter>

      <Box bg='#4193bf'>
        <NavBar />
      </Box>

      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/category/:category' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App