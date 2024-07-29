import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { createCategory } from '../../services/CategoryService';

const AddCategoryModal = () => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createCategory(categoryName);
      setCategoryName('');
      setShow(false); // Closes the form upon submission
    } catch (error) {
      // Error handling already present in 'createCategory'
    }
  }

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        New Category
      </Button>

      <Modal 
        show={show} 
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="categoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter text here"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCategoryModal;