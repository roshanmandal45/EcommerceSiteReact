import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";


export default function Home() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">
        Welcome to ShopHub
      </h1>

      <p className="text-xl mb-6 text-gray-700">
        Your one-stop shop for electronics, fashion & more
      </p>

      {user && (
        <p className="mb-4 text-gray-600">
          Logged in as <span className="font-semibold">{user.email}</span>
        </p>
      )}

      <div className="flex gap-4">
        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Shop Now
        </Link>

        {!user ? (
          <>
           
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
