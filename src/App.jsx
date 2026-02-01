import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetails";
import Favourite from "./components/Favourite";
import Login from "./pages/Login";
import ProtectedRoute from "./protectedRoute/Protected";
import Register from "./pages/Register";


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

         
          <Route
            path="/products"
            element={
              
                <Products />
              
            }
          />

          <Route
            path="/products/:id"
            element={
                <ProductDetail />
              
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/favourite"
            element={
              <ProtectedRoute>
                <Favourite />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
