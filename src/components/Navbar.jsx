import { Link } from "react-router-dom";
import { Handbag, Heart, ShoppingCart, Menu, X } from "lucide-react";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { CardContext } from "../config/context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CardContext);
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const cookieUser = Cookies.get("user");
    setUser(cookieUser ? JSON.parse(cookieUser) : null);
  }, []);

  const handleLogout = () => {
    Cookies.remove("user");
    setUser(null);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-blue-600 font-bold text-2xl tracking-tight">
            <ShoppingCart className="h-7 w-7" /> ShopHub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Products</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</Link>
          </div>

          {/* Icons & User Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/favourite" className="text-gray-600 hover:text-red-500 transition-colors">
              <Heart className="w-6 h-6" />
            </Link>

            <div className="relative">
              <Link to="/cart" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Handbag className="w-6 h-6" />
              </Link>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full animate-bounce">
                  {cart.reduce((total, item) => total + (item.quantity || 1), 0)}
                </span>
              )}
            </div>

            {user ? (
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <img
                  src={user.photo || `https://ui-avatars.com/api/?name=${user.name}`}
                  alt="profile"
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-blue-100"
                />
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-red-500 hover:text-red-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition">Login</Link>
                <Link to="/register" className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm hover:shadow-md">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <div className="relative mr-2">
              <Link to="/cart" className="text-gray-600">
                <Handbag className="w-6 h-6" />
              </Link>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                  {cart.reduce((total, item) => total + (item.quantity || 1), 0)}
                </span>
              )}
            </div>
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-slide-in-top">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">Home</Link>
            <Link to="/products" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">Products</Link>
            <Link to="/favourite" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">Favorites</Link>
            
            <div className="border-t border-gray-100 my-2 pt-2">
              {user ? (
                <div className="flex items-center justify-between px-3 py-2">
                  <div className="flex items-center gap-2">
                    <img src={user.photo || `https://ui-avatars.com/api/?name=${user.name}`} className="w-8 h-8 rounded-full" alt="profile"/>
                    <span className="font-medium text-gray-700">{user.name}</span>
                  </div>
                  <button onClick={() => { handleLogout(); setIsOpen(false); }} className="text-red-500 font-medium">Logout</button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4 px-3">
                  <Link to="/login" onClick={() => setIsOpen(false)} className="text-center py-2 border border-gray-200 rounded-lg text-gray-600 font-medium">Login</Link>
                  <Link to="/register" onClick={() => setIsOpen(false)} className="text-center py-2 bg-blue-600 text-white rounded-lg font-medium">Sign Up</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
