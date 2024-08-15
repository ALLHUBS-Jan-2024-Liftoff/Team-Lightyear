import React from 'react'
import axios from 'axios';

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
    await axios.get("http://localhost:8080/api/home",
    { withCredentials: true,
     });
  } catch (error) {
    console.error("There was an error returning home", error);
  }
};

  return (
    <div>
    <h1>Are you sure?</h1>
    <button onClick={handleReturn}>Return</button>
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}


export default Logout