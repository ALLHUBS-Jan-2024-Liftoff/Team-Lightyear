import { useState, useEffect } from 'react';
import React from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { updateAccount } from '../../services/AccountService';

const UpdateAccountModal = ({ account, onUpdate }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(account);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (account) {
      setFormData(account);
    }
  }, [account]);

  const handleClose = () => {
    setShow(false);
    setMessage("");
    setError(null);
  }

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError(null);

    const newData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      role: formData.role,
    };

    setIsLoading(true);
    try {
      await updateAccount(account.id, newData);
      setMessage("Account updated successfully!");
      setTimeout(() => {
        handleClose();
        if (onUpdate) onUpdate();
      }, 1000);
    } catch (error) {
      setError("There was an error updating the account. Please try again.");
    } finally {
      setIsLoading(false);
    };



  }

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message && <p style={{ color: 'green' }}>{message}</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Form onSubmit={handleSubmit}>
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
                  <option value="Admin">Admin</option>
                  <option value="Employee">Employee</option>
                  <option value="Manager">Manager</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Button variant="secondary" onClick={handleClose} disabled={isLoading}>
              Close
            </Button>{" "}
            <Button variant="primary" type="submit" disabled={isLoading}>
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateAccountModal;
