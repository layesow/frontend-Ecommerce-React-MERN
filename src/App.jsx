import {  } from 'react'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

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
