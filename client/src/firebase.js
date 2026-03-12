// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "siteforgeai-e6d4b.firebaseapp.com",
  projectId: "siteforgeai-e6d4b",
  storageBucket: "siteforgeai-e6d4b.firebasestorage.app",
  messagingSenderId: "1039024041485",
  appId: "1:1039024041485:web:62ae556440efc849242f44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
