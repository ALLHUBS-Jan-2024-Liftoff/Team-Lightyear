import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';

/* 
  Created by Dominique Gould 
*/

function LoginPage({ setAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  // Function to handle login
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Debugging logs
    console.log("Is it working?");
    console.log(email, password);
    try {
      // POST request for login with email and password
      const response = await axios.post("http://localhost:8080/api/login", 
      {
        email, // user's email
        password // user's password
      }, 
      {
        withCredentials: true, // Include credentials with the request
      }
      );
      // Set authentication state to true on successful login
      setAuthenticated(true);
      // Debugging Log and set the success message received from the server

      console.log(response.data.message);
      setMessage(response.data.message);
    } catch (error) {
      // Set an error message based on the server's response or a default message
      setMessage(error.response?.data.message || "Login failed");
    }
  
  };


  return (
    <Container className="mt-5">
      
      <div className='header'>
      <h1 className="text-center">Welcome Back!</h1>
      </div>
    
    {/* Login form here */}
    
    <div className="text-center">
      {/* Form inputs */}
      <form onSubmit={handleLogin}>
        <div className='inputContainer'>

          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
          
          <p></p>

          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        </div>
        
        {/* Will add forgot password later */}
        
        <div className='submitContainer'>
          {/* Button to handle login */}
          <Button variant="primary" type='submit'>Login</Button>
        </div>


      </form>
      {/* Display success or error message */}
      {message && <p>{message}</p>}
    </div>
    

    </Container>
  )
}

export default LoginPage