import { useState } from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import CarouselDisplay from '../carousel/CarouselDisplay';

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
    <>
      <Container className="mt-5">
        <h1 className="text-center">Welcome Back!</h1>
        {/* Login form here */}
      
        <div className="text-center">
          {/* Form inputs */}
          <form onSubmit={handleLogin}>
            <div className='inputContainer'>
              <label htmlFor='email'>Email:&nbsp;</label>
              <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
              
              <p></p>

              <label htmlFor='password'>Password:&nbsp;</label>
              <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            </div>
          
            {/* Will add forgot password later */}
            
            <div className='submitContainer'>
              <Button variant="primary" type='submit'>Login</Button>
            </div>
          </form>
          {message && <p>{message}</p>}
        </div>
      </Container>
      <CarouselDisplay />
    </>
  )
}

export default LoginPage