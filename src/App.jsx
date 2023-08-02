import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Box } from '@chakra-ui/react'
/* import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About' */


const App = () => {
  return (
    <>
      <Box bg='#4193bf'>
        <NavBar />
      </Box>
      <ItemListContainer />
    </>
  )
}

export default App





{/* <BrowserRouter>

<Box bg='#4193bf'>
  <NavBar />
</Box>

<Routes>

  <Route exact path='/' element={<Home />} />
  <Route exact path='/about' element={<About />} />


  <ItemListContainer />
  <ItemDetailContainer/>


  </Routes>
  </BrowserRouter> */}