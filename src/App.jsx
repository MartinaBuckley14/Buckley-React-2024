
import './App.css'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import Formulario from './components/FormularioContacto/Formulario'
import { CartProvider } from './components/context/CartContext'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <div>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListConteiner greeting={"Somos FT Lures! Productores de los mejores señuelos artesanales de la Argentina"}/>}/>
          <Route path='/category/:idCategory' element={<ItemListConteiner/>}/>
          <Route path='/detail/:idProduct' element={<ItemDetailConteiner/>} />
          <Route path='/contacto/contacto' element={<Formulario/>}/>
          <Route path='/cart' element = {<Cart/>}/>
        </Routes>

        {/*Footer*/}

      </CartProvider>
        
      </BrowserRouter>
      
      
    </div>
    
  )
}

export default App
