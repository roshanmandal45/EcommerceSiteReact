import { Link } from "react-router-dom";
import { Handbag, Heart, ShoppingCart } from "lucide-react";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { CardContext } from "../config/context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CardContext);
  const [user, setUser] = useState(null);

 
  useEffect(() => {
    const cookieUser = Cookies.get("user");
    setUser(cookieUser ? JSON.parse(cookieUser) : null);
  }, []);

  const handleLogout = () => {
    Cookies.remove("user");
    setUser(null);
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

       
        <Link to="/" className="flex items-center gap-2 text-blue-600 font-bold text-xl">
          <ShoppingCart className="h-6 w-6" /> ShopHub
        </Link>

       
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <div className="flex gap-x-10 items-center">
          <Link to="/favourite">
            <Heart color="#e81111" />
          </Link>

          {/* CART */}
          <div className="relative">
            <Link to="/cart">
              <Handbag color="#e81111" />
            </Link>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </div>

          
          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={user.photo || `https://ui-avatars.com/api/?name=${user.name}`}
                alt="profile"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium">{user.name}</span>

              <button
                onClick={handleLogout}
                className="shadow px-3 py-1 hover:bg-red-600 hover:text-white rounded-xl"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-x-4">
              <Link to="/login">
                <button className="shadow px-3 py-1 rounded-xl">Login</button>
              </Link>
              <Link to="/register">
                <button className="shadow px-3 py-1 rounded-xl">Signup</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
