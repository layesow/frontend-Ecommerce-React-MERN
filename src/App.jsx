import {  } from 'react'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {

  return (
    <>
      <>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </>
    </>
  )
}

export default App
