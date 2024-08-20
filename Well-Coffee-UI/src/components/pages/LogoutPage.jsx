import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

const handleReturn = async () => {
  
  try {
    await axios.post("http://localhost:8080/api/home",
    { withCredentials: true,
     });
     setAuthenticated(false);
  } catch (error) {
    console.error("There was an error returning home", error);
  }
};

const navigate = useNavigate();
const returnToHome = () => {
  let path = 'http://localhost:8080/api/home';
  navigate(path);
}


  return (
    <div>
    <h1>Are you sure?</h1>
    <button onClick={returnToHome}>Return</button>
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}


export default Logout