import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Api() {
  const [products, setProducts] = useState([]); // store fetched products
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state
  

  useEffect(() => {
    // fetch data when component mounts
    axios
      .get('https://fakestoreapi.com/products') // sample API
      .then((response) => {
        setProducts(response.data); // store response data
        setLoading(false); // stop loading
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products from API</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="font-semibold text-gray-900 mb-2">{product.title}</h2>
            <p className="text-blue-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
//use effect 