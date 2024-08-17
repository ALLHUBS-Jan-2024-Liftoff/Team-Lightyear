import React from 'react'
import { useState } from 'react';
import axios from 'axios';

/* 
  Created by Dominique Gould 
*/

function LoginPage({ setAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // const BASEAPIURL = "http://localhost:8080/api/login";

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Is it working?");
    console.log(email, password);
    try {
      const response = await axios.post("http://localhost:8080/api/login", 
      {
        email, 
        password
      }, 
      {
        withCredentials: true,
      }
      );
      setAuthenticated(true);
      console.log(response.data.message);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data.message || "Login failed");
    }
  
  };


  return (
    <div className='container'>
      <div className='header'>
        <p>Welcome Back!</p>
        <h1>Log In</h1>
      </div>
    
    {/* Login form here */}
    
    <div className='loginForm'>
      {/* Form inputs */}
      <form onSubmit={handleLogin}>
        <div className='inputContainer'>

          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />

          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        </div>
        
        {/* Will add forgot password later */}
        
        <div className='submitContainer'>
          <button type='submit'>Login</button>
        </div>


      </form>
      {message && <p>{message}</p>}
    </div>
    

    </div>
  )
}

export default LoginPage