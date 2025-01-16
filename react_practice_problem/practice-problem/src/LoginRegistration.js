// Implement a basic authentication form with login and registration
import React, { useState } from "react";

const LoginRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const handleAuthentication = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    if (isRegistered) {
    //logic
    if(isRegistered){
        const user = users.find((u)=> u.email===email &&u.password===password)
        if(user){
            setIsLoggedIn(true);
        }
        else{
            alert('login failed. please check your credential')
        }
    }

    } else {
      // Registration logic
      const newUser = { email, password };
      setUsers([...users, newUser]);
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsLoggedIn(true);
    }
  };
  const handleLogout=()=>{
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {email}!</h2>
          <button onClick={() => handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <form>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuthentication}>
              {isRegistered ? "Login" : "Register"}
            </button>
          </form>
          <p>
            {isRegistered
              ? "Don't have an account? Register Now"
              : "Already have an account? Login"}
          </p>
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginRegistration;
