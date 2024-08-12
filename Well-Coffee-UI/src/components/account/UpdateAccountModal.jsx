import { useState, useEffect } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import axiosInstance from '../../services/axiosInstance';

const UpdateAccountModal = ({ account, onUpdate }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(account);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (account) {
      setFormData(account);
    }
  }, [account]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axiosInstance.put(`/accounts/${formData.id}`, formData)
      .then(() => {
        onUpdate();
        handleClose();
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error updating account:', error);
        setError('Failed to update account');
        setIsLoading(false);
      });
  };

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
          {isLoading && <p>Loading...</p>}
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
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateAccountModal;
