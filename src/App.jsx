
import './App.css'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import Formulario from './components/FormularioContacto/Formulario'


function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListConteiner greeting={"Somos FT Lures! Productores de los mejores señuelos artesanales de la Argentina"}/>}/>
          <Route path='/category/:idCategory' element={<ItemListConteiner/>}/>
          <Route path='/detail/:idProduct' element={<ItemDetailConteiner/>} />
          <Route path='/contacto/contacto' element={<Formulario/>}/>
        </Routes>

        {/*Footer*/}
      </BrowserRouter>
      
      
    </div>
    
  )
}

export default App
