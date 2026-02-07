import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { CardContext } from "../config/context/CartContext";
import PaymentModal from "./PaymentModal";

export default function Cart() {
  const { cart, removeFromCart, getCartTotal } = useContext(CardContext);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-500">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/products" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow flex gap-4 items-center">
              <img src={item.image} alt={item.title} className="w-24 h-24 object-contain bg-white" />
              
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">{item.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold text-lg">${item.price}</span>
                  <div className="flex items-center gap-4">
                     <span className="text-gray-600">Qty: {item.quantity || 1}</span>
                     <button 
                       onClick={() => removeFromCart(item.id)}
                       className="text-red-500 hover:text-red-700 p-2"
                       title="Remove item"
                     >
                       <Trash2 size={20} />
                     </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4 border-b pb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
            </div>
            
            <div className="flex justify-between mb-6">
              <span className="text-xl font-bold">Total</span>
              <span className="text-xl font-bold">${getCartTotal().toFixed(2)}</span>
            </div>

            <button
              onClick={() => setIsPaymentOpen(true)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {isPaymentOpen && <PaymentModal onClose={() => setIsPaymentOpen(false)} />}
    </div>
  );
}
