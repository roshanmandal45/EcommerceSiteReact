import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { auth } from "../config/firebase";
import { CardContext } from "../config/context/CartContext";

export default function ProductDetail() {
  const navigate = useNavigate()
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const {addToCart, cart} = useContext(CardContext)

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="p-8 flex items-center justify-center bg-white">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-h-[500px] object-contain"
            />
          </div>

          {/* Details Section */}
          <div className="p-8 lg:py-12 flex flex-col justify-center bg-gray-50/50">
            <Link to="/products" className="text-gray-500 hover:text-blue-600 mb-6 inline-flex items-center text-sm font-medium transition">
               ← Back to Products
            </Link>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">{product.title}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-blue-600">${product.price}</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full uppercase tracking-wide">
                {product.category}
              </span>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">{product.description}</p>
            
            <button
              onClick={() => {
                if (!auth.currentUser) {
                  navigate("/login"); 
                } else {
                  addToCart(product);
                }
              }}
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition transform active:scale-95 flex items-center justify-center gap-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
  