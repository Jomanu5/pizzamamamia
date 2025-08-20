
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Layout from './components/Layout'
import NotPage from './pages/NotPage'
import Profile from './pages/Profile'

import Pizza from './pages/Pizza'
import { CartProvider } from './context/CartContext'
import { ApiProvider } from './context/ApiContext'
function App() {
  

  return (
    <>
    <ApiProvider>

    <CartProvider>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotPage />} />
          <Route path="/pizzas/:idpizza" element={<Pizza />} />

          </Route>
        </Routes>
    </BrowserRouter>
    
    <Footer />
    </CartProvider>
    </ApiProvider>
     
    </>
  )
}

export default App
