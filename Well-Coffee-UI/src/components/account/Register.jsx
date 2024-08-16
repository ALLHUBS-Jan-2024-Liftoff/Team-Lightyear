import axios from "axios";
import React, { useState } from "react";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [role, setRole] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/register", 
            {
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@example.com",
                password: "password",
                role: "admin"
            });

            setMessage(response.data.message);
        } catch (error) {
            console.error(error);
        }
    };
}