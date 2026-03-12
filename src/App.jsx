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
import Profile from './pages/account/Profile';
import Orders from './pages/account/Orders';
import ChangePassword from './pages/account/ChangePassword';
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';
import { Toaster } from 'react-hot-toast';
import RequireAdminAuth from './common/RiquireAdminAuth';
import AdminGuest from './common/AdminGuest';

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
          <Route path='/account/profile' element={<Profile/>} />
          <Route path='/account/orders' element={<Orders/>} />
          <Route path='/account/change-password' element={<ChangePassword/>} />


          {/* admin route */}
          {/* <Route path='/admin/login' element={<AdminLogin/>} /> */}
          
          {/* <Route path='/admin/dashboard' element={<Dashboard/>} /> */}
          <Route 
            path='/admin/login'
            element={
              <AdminGuest>
                <AdminLogin/>
              </AdminGuest>
            }
          />

          <Route 
            path='/admin/dashboard'
            element={
              <RequireAdminAuth>
                <Dashboard/>
              </RequireAdminAuth>
            }
          />





      </Routes>
      <Toaster/>
    </>
    </>
  )
}

export default App
