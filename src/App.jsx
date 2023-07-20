import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting="Bienvenido a Termo Store!"
      />
    </>
  )
}

export default App