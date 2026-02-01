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
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}  
            className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-gray-900">{product.title}</h2>
              <p className="text-gray-700 font-bold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
