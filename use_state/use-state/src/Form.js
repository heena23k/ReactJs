import React, { useState } from "react";

const Form = () => {
  //   const [name, setName] = useState("");
  //   const [email, setemail] = useState("");
  //   const [password, setPassword] = useState("");
  //  using multiple state to one state
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  // Multiple state to one state
const handleInput =(e)=>{
    // console.log(e.target.name);
    // console.log(e.target.value);
    // destructing above 2 lines
    const[name,value] = e.target;
    setFormData({
        ...FormData,[name]:value
    
    })
    
}

//   const handleName = (e) => {
//     console.log(e.target.value);
//     setName(e.target.value);
//   };
//   const handleEmail = (e) => {
//     console.log(e.target.value);
//     setemail(e.target.value);
//   };
//   const handlePassword = (e) => {
//     console.log(e.target.value);
//     setPassword(e.target.value);
//   };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name"value={FormData.name} onChange={handleInput}></input>
        </label>
        <br></br>
        <label>
          Email:
          <input type="email" name="email"value={FormData.email} onChange={handleInput}></input>
        </label>
        <br></br>
        <label>
          Password:
          <input
            type="password" name="password"
            value={FormData.password}
            onChange={handleInput}
          ></input>
        </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
