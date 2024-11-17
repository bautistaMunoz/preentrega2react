import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './contexto/CartContext'
import Checkout from './components/Checkout/Checkout'
import Cart from './Cart/Cart'
import './App.css'

function App() {

  return (
    <div className='container-app'>
      <BrowserRouter>
      <CartProvider>

        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer saludo={"MUMA CERVEZA"} /> } />
          <Route path="/category/:idCategory" element={<ItemListContainer saludo={"MUMA CERVEZA"} />} />
          <Route path="/detail/:idProduct" element={ <ItemDetailContainer /> } />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>

      </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
