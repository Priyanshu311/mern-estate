// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3f7cf.firebaseapp.com",
  projectId: "mern-estate-3f7cf",
  storageBucket: "mern-estate-3f7cf.firebasestorage.app",
  messagingSenderId: "493296318489",
  appId: "1:493296318489:web:3611b7c78b663e85c45288"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);