import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CardContext } from "../context/CartContext";
import { auth } from "../config/firebase";

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

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <Link to="/products" className="text-blue-600 hover:text-blue-700 mb-4 block">
           Back to Products
        </Link>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
        <p className="text-gray-700 text-xl font-semibold mb-4">${product.price}</p>
        
        <p className="text-gray-600">{product.description}</p>
       <button
  onClick={() => {
    if (!auth.currentUser) {
      navigate("/login"); 
    } else {
      addToCart(product);
    }
  }}
  className="shadow-2xl bg-amber-400 w-28 p-2 rounded-2xl text-white active:scale-90"
>
  Add to Cart
</button>

        <br></br>
        
      </div>
    </div>
  );
}
  