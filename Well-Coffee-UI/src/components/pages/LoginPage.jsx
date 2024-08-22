import { useState } from 'react';
import axios from 'axios';
import { Container, Button, Row,  Col, Form, Card } from 'react-bootstrap';
import CarouselDisplay from '../carousel/CarouselDisplay';

/* 
  Created by Dominique Gould 
*/

function LoginPage({ setAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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
        <Row className="justify-content-center">
          <Col style={{ maxWidth: '500px' }}>
            <Card className="p-4">
              <Card.Body>
                <h1 className="text-center mb-4">Welcome Back!</h1>
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  {/* Forgot password link can be added here later */}

                  <Button variant="primary" type="submit" className="w-100">
                    Login
                  </Button>
                </Form>
                {message && <p className="text-center text-danger mt-3">{message}</p>}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <CarouselDisplay />
    </>
  )
}

export default LoginPage