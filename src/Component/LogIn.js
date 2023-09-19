import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
const Login = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const Navigate=useNavigate()

useEffect(()=>{
  const auth=localStorage.getItem('user')
if(auth){
  Navigate('/')
}
})

 async function handleLogin() {
    console.log(email, password);
    let data={email,password}
    let result=await fetch('http://localhost:5000/login',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            "Content-type": "application/json",   
        }
    })
    result=await result.json();
    console.log(result);
    if(result.token){
       localStorage.setItem('user',JSON.stringify(result.result))
       localStorage.setItem('token',JSON.stringify(result.token))
      Navigate('/')
    }else{
        alert('pleace enter correct data')
    }
  }
  return (
    <div className="Login">
      <h1>log in</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className="appButton" onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
};
export default Login;
