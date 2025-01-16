// for login

import { useState,useEffect } from "react";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUSer] = useState(null);

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const LoggedInUser = userCredential.user;
        setUSer(LoggedInUser);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };
  const logOut=()=>{
    signOut(auth)
    .then(()=>{
        setUSer(null);
        console.log("sign out")
    }).catch((error)=>{
        console.log(error);
        
    })
  }
 useEffect(() => {
 const unsubscribe =auth.onAuthStateChanged((user)=>{
    if(user){
        setUSer(user);
    }
    else{
        setUSer(null);
    }
 })
 return ()=>unsubscribe();
 },[])

  return (
    <div>
      <form onSubmit={logIn}>
        <h1>Login</h1>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {user ? <div><p>Welcome,{user.email}</p><button onClick={logOut}>Log Out</button></div> : <p>You are not login</p>}
    </div>
  );
};

export default Login;
