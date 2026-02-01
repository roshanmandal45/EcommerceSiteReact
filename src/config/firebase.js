// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "Meta.process.env.apiKey",
  authDomain: "ecommerce-site-d770e.firebaseapp.com",
  projectId: "ecommerce-site-d770e",
  storageBucket: "ecommerce-site-d770e.firebasestorage.app",
  messagingSenderId: "109292383893",
  appId: "1:109292383893:web:ee6b9bde983c271a55359c",
  measurementId: "G-7RKRNFF38X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);