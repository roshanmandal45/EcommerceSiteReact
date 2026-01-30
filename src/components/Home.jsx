import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">Welcome to ShopHub</h1>
      <p className="text-xl mb-6 text-gray-700">Your one-stop shop for electronics, fashion & more</p>
      <Link
        to="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Shop Now
      </Link>
    </div>
  );
}
