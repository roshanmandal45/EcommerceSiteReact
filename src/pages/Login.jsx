import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { auth, googleProvider } from "../config/firebase";
import { saveUser } from "../database/db";

const COOKIE_EXPIRY_HOURS = 2; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const nameFromEmail = user.email.split("@")[0];
      Cookies.set(
        "user",
        JSON.stringify({
          name: nameFromEmail,
          photo: null, 
        }),
        { expires: COOKIE_EXPIRY_HOURS / 24 }
      );

      alert("Login successful ");
      navigate("/"); 
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await saveUser(user);

      Cookies.set(
        "user",
        JSON.stringify({
          name: user.displayName,
          photo: user.photoURL,
        }),
        { expires: COOKIE_EXPIRY_HOURS / 24 }
      );

      alert("Google login successful ");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 border py-3 rounded-lg"
        >
          Continue with Google
        </button>

        <p className="text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
