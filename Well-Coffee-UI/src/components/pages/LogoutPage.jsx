import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

function Logout({ setAuthenticated }) {

const handleLogout = async () => {
  
  try {
    await axios.get("http://localhost:5173/api/logout",
    { withCredentials: true,
     });
     setAuthenticated(false);
  } catch (error) {
    console.error("There was an error logging out", error);
  }
};


const navigate = useNavigate();
const returnToHome = () => {
  let path = 'http://localhost:8080/api/home';
  navigate(path);
}


  return (
    <Container className="mt-5">
    <h1 className="text-center">Are you sure?</h1>
    <div className="text-center">
    <Button variant='primary' onClick={returnToHome}>Return</Button>{" "}
    <Button variant="danger" onClick={handleLogout}>Logout</Button>
    </div>
    </Container>

  )
}


export default Logout