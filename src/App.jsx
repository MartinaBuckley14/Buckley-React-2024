
import './App.css'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import NavBar from './components/Navbar/NavBar'


function App() {

  return (
    <div>
      <NavBar/>
      <ItemListConteiner greeting={"Somos FT Lures! Productores de los mejores señuelos artesanales de la Argentina"}/>
    </div>
    
  )
}

export default App
