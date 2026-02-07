import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}  
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
            >
              <div className="relative pt-4 px-4 flex justify-center items-center h-64 bg-white group-hover:scale-105 transition duration-300">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full object-contain"
                />
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <h2 className="font-semibold text-gray-900 line-clamp-1 mb-1 group-hover:text-blue-600 transition">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-500 capitalize mb-3">{product.category}</p>
                
                <div className="mt-auto flex justify-between items-center">
                   <p className="text-lg font-bold text-gray-900">${product.price}</p>
                   <span className="text-sm font-medium text-blue-600 hover:underline">View Details</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
