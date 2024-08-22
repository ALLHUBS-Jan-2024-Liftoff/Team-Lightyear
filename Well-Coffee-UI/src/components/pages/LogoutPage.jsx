import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';


function Logout({ setAuthenticated }) {

// Function to handle user logout
const handleLogout = async () => {
  
  try {
    // GET request to logout with credentials

    await axios.get("http://localhost:5173/api/logout",
    { withCredentials: true,
     });
     // Update authentication state to false after successful logout
     setAuthenticated(false);
  } catch (error) {
    // Log error if logout fails. Not shown on front end.
    console.error("There was an error logging out", error);
  }
};


const navigate = useNavigate();

// Function to navigate to the home page
const returnToHome = () => {
  let path = 'http://localhost:8080/api/home';
  navigate(path);
}


  return (
    <Container className="mt-5">
    <h1 className="text-center">Are you sure?</h1>
    <div className="text-center">
    {/* Button to return to the home page */}
    <Button variant='primary' onClick={returnToHome}>Return</Button>{" "}

    {/* Button to handle logout */}
    <Button variant="danger" onClick={handleLogout}>Logout</Button>
    </div>
    </Container>

  )
}


export default Logout