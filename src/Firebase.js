// Import required functions from the Firebase modular SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNcmfppPIUI3T0YqAHbN7BWwy17Ch3thc",
  authDomain: "react-ecommerce-project-64e05.firebaseapp.com",
  projectId: "react-ecommerce-project-64e05",
  storageBucket: "react-ecommerce-project-64e05.appspot.com",
  messagingSenderId: "646487126860",
  appId: "1:646487126860:web:d63ecdf21eae8f9492d5e9",
  measurementId: "G-TZWJQL7B1K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
