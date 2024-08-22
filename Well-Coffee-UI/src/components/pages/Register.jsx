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

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
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

            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Registration failed");
        }
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center">Register</h1>
            
            <div className="text-center">
            <form onSubmit={handleRegister}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div>
                    <Button variant="primary" type="submit">Register</Button>
                </div>
            </form>
            {message && <p>{message}</p>}
            </div>
        </Container>             
    )
}

export default Register;