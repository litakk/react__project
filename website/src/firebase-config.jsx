// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE6iV7Ok06ArDSWWyqrib1AG7reDHWGT8",
  authDomain: "react-72ed0.firebaseapp.com",
  projectId: "react-72ed0",
  storageBucket: "react-72ed0.appspot.com",
  messagingSenderId: "168910667070",
  appId: "1:168910667070:web:51d1d9d0f9358e0299406f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);