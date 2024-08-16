import { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import axiosInstance from '../../services/axiosInstance';
import { createAccount } from '../../services/AccountService';

const AddAccountModal = ({ onAdd }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createAccount(account);
      setSuccess(true); // Sets success state to true and displays a message to the user
      setTimeout(() => {
        handleClose();
      }, 1500); // Closes the modal after 1.5 seconds

    } catch (error) {
      // Error message will be displayed to the user if the category cannot be created
      setError("There was an error creating the account. Please try again.");
    }
  }

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Add New Account
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="account">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                  <option value="manager">Manager</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Button variant="secondary" onClick={handleClose} disabled={isLoading}>
              Close
            </Button>
            <Button variant="primary" type="submit" disabled={isLoading}>
              Add Account
            </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddAccountModal;
