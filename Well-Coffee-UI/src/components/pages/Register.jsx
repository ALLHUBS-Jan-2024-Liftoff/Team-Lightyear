import axios from "axios";
import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

function Register() {
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    // const [role, setRole] = useState("");

    // Function to handle form submission
    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            // POST request to register
            const response = await axios.post("http://localhost:8080/api/register", 
            {
                firstName,
                lastName,
                email,
                password,
                role: "employee"
            },
            {
                withCredentials: true,
            }
            );
            // Set the success message from the server response
            setMessage(response.data.message);
        } catch (error) {
            // Set the error message if the request fails
            setMessage(error.response?.data?.message || "Registration failed");
        }
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center">Register</h1>
            
            <div className="text-center">
            {/* Form inputs */}
            <form onSubmit={handleRegister}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <p></p>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <p></p>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <p></p>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <p></p>

                <div>
                    <Button variant="primary" type="submit">Register</Button>
                </div>
            </form>
            {/* Display success or error message */}
            {message && <p>{message}</p>}
            </div>
        </Container>             
    )
}

export default Register;