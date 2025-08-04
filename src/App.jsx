
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Layout from './components/Layout'
import NotPage from './components/NotPage'
function App() {
  

  return (
    <>


    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotPage />} />
          </Route>
        </Routes>
        

    </BrowserRouter>
    <Footer />
     
    </>
  )
}

export default App
