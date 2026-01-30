import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Cart from './components/Cart'
import Products from './components/Products'
import ProductDetail from './components/ProductDetails'
import { Route, Routes } from 'react-router-dom'
import Favourite from './components/Favourite'
import Login from './components/Login'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favourite" element={<Favourite/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </main>
        <Footer />
       
      </div>
  )
}

export default App
