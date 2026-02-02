import { Link } from "react-router-dom";
import { Handbag, Heart, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CardContext } from "../config/context/CartContext";

export default function Navbar() {
      const { cart} = useContext(CardContext)
  
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-600 font-bold text-xl"
        >
          <ShoppingCart className="h-6 w-6" /> ShopHub
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-500">
            Products
          </Link>
          <Link to="/cart" className="hover:text-blue-500">
            Cart
          </Link>
        </div>
        <div className="flex gap-x-10 justify-between items-center">
          <Link to={"/favourite"}>
            <i>
              <Heart color="#e81111" />
            </i>
          </Link>
         <div className="relative">
  <Link to="/cart">
    <Handbag color="#e81111" />
  </Link>

  {cart.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full">
      {cart.length}
    </span>
  )}
</div>
<div className=" flex gap-x-4">
<Link to={"login"}>
            {" "}
            <button className="shadow w-22 p-2 hover:bg-blue-600 hover:text-white text-black rounded-2xl active:scale-90 cursor-pointer">
              Login
            </button>
          </Link>

          <Link to={"register"}>
            {" "}
            <button className="shadow w-22 p-2 hover:bg-blue-600 hover:text-white text-black rounded-2xl active:scale-90 cursor-pointer">
              Signup
            </button>
          </Link>
</div>
          
        </div>
      </div>
    </nav>
  );
}
