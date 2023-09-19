import React, { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const SingUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate=useNavigate() 

  useEffect(()=>{
    const auth=localStorage.getItem('user')
    if(auth){
      Navigate('/')
    }
  })
    
  const collectData = async () => {
    console.log(name, email, password);
    let data={name,email,password}
    let result = await fetch('http://localhost:5000/register', {
      method: "POST",
      body:JSON.stringify(data),
      headers: {
          "Content-type": "application/json",
        },
    });
    result = await result.json();
    console.warn(result);
     
    // if(result){
        Navigate('/')
        localStorage.setItem('user',JSON.stringify(result.result))
        localStorage.setItem('token',JSON.stringify(result.token))
    // }

  };
  return (
    <div className="Register">
      <h1>sing up</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="appButton" onClick={collectData}>
        Sing Up
      </button>
    </div>
  );
};
export default SingUp;
