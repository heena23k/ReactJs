
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase-config';
import { addDoc, collection, getDocs,doc,updateDoc, deleteDoc } from "firebase/firestore"; 

function App() {
  const userCollectionRef = collection(db,"crud");
  const [users,setUser] = useState([]);
  const [name,setName]= useState("");
  const[age,setAge] = useState(0);
  const updateAge=async(id,age)=>{
    const userDoc = doc(db,"crud",id)
const newAge = {age:age+5};
await updateDoc(userDoc,newAge);
  }
  const createUser=async()=>{
await addDoc(userCollectionRef,{name:name,age:age})
  }
  const deleteUser =async(id)=>{
const userDoc = doc(db,"crud",id)
await deleteDoc(userDoc);
  }
  useEffect(()=>{
    const getUsers = async()=>{
      const data = await getDocs(userCollectionRef)
      console.log(data);
      const docsRef = data.docs.map((doc)=>({
        ...doc.data(),id:doc.id
      }


      ))
      console.log(docsRef);
      setUser(docsRef)
      
    }

    
    getUsers();
  },[])
  
  return (
    <div>
    <input type='text' placeholder='Name...' value= {name} onChange={(e)=>setName(e.target.value)}/>
    <input type='number' placeholder='Age...' value={age}onChange={(e)=>setAge(e.target.value)}/>
    <button onClick={createUser}>Create User</button>
{users.map((user)=>{
  return <div>
  <h2>Name:{user.name}</h2>
  <h2>Age:{user.age}</h2>
  <button onClick={()=>updateAge(user.id,user.age)}>Update Age</button>
  <button onClick={()=>deleteUser(user.id)}>Delete </button>
  </div>
})}
    </div>
  );
}

export default App;
