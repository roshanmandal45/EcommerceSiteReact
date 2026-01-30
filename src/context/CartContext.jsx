import { createContext, useContext, useEffect, useState } from "react";

export const CardContext = createContext();

export default function CartContextProvider({ children }) {
  // const [product, setProduct] = useState([]);
  const [cart, setCart] = useState(() => {
 const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
  });
 
  const addToCart = (product) => {
setCart(prev => [...prev, product]);
  };
  useEffect(() => {
   localStorage.setItem("cart",JSON.stringify(cart));
  
   
  }, [cart])
  
  return (
    <CardContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CardContext.Provider>
  );
}
