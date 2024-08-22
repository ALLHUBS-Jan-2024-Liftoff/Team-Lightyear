import axios from "axios";
import { useState } from "react";

const BASEAPIURL = "http://localhost:8080/api";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

// Function to handle login. Not currently used.

// export const handleLogin = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await axios.get(`${BASEAPIURL}`, 
//     {username, password}, 
//     // {withCredentials: true,}
//     );
//     setAuthenticated(true);
//     setMessage(response.data.message);
//   } catch (error) {
//     setMessage(error.response.data.message || "Login failed");
//   }

// };