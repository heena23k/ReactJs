// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrAKE-vSq3l5Zd_Lhr0Z4TVneej7tAu54",
  authDomain: "fir-crud-7f211.firebaseapp.com",
  projectId: "fir-crud-7f211",
  storageBucket: "fir-crud-7f211.firebasestorage.app",
  messagingSenderId: "487806651310",
  appId: "1:487806651310:web:a1e2a71e0fe80d702d563f",
  measurementId: "G-RP49K9DHWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
