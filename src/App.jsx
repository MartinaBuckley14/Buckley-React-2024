
import './App.css'
import { getProducts } from './components/data/data.js'
import ItemList from './components/ItemListConteiner/ItemList.jsx'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner.jsx'


function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListConteiner greeting={"Somos FT Lures! Productores de los mejores señuelos artesanales de la Argentina"}/>}/>
          <Route path='/category/:idCategory' element={<ItemListConteiner/>}/>
          <Route path='/detail/:idProduct' element={<ItemDetailConteiner/>} />
        </Routes>

        {/*Footer*/}
      </BrowserRouter>
      
      
    </div>
    
  )
}

export default App
