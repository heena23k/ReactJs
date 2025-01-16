
import { useEffect } from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs } from "firebase/firestore"; 

function App() {
  const userCollectionRef = collection(db,"crud");
  useEffect(()=>{
    const getUsers = async()=>{
      const data = await getDocs(userCollectionRef)
      console.log(data);
      
    }
    getUsers();
  },[])
  return (
    <div>
hello
    </div>
  );
}

export default App;
