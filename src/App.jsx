import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Box } from '@chakra-ui/react'

const App = () => {
  return (
    <>
      <Box bg='#4193bf'>
        <NavBar />
      </Box>
      <ItemListContainer
        greeting="Bienvenido a Termo Store!"
      />
    </>
  )
}

export default App