// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9jeEo6YtqWlxWYxwIliLreT4XeZNvQw4",
  authDomain: "fir-authentication-15f0b.firebaseapp.com",
  projectId: "fir-authentication-15f0b",
  storageBucket: "fir-authentication-15f0b.firebasestorage.app",
  messagingSenderId: "1016692624426",
  appId: "1:1016692624426:web:cff4b8d3f99a091f30c753",
  measurementId: "G-XKK7WW60L4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);