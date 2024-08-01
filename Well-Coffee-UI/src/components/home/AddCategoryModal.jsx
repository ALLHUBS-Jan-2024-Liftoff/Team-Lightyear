import { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { createCategory } from '../../services/CategoryService';

const AddCategoryModal = ({ onAddCategory, resetMessages, error, success }) => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('');

  const handleClose = () => {
    setShow(false);
    setCategoryName(''); // Resets the category name field when modal is closed
    resetMessages();
  };

  const handleShow = () => {
    setShow(true);
  } 
  
  // This function handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Uses the prop function passed from 'HomePage'
    await onAddCategory(categoryName);
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        handleClose();
      }, 1000); // Closes the modal after 1 second
    }
  }, [success]); 

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
          <Form onSubmit={handleSubmit} id="addCategoryForm">
            <Form.Group className="mb-3" controlId="categoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter text here"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                autoFocus // Allows the user to automatically fill out the input field without having to click it
                required // Doesn't allow form submission without text
                autoComplete='off' // Prevents the browser from showing previous input history
              />
            </Form.Group>
            {error && <div className='alert alert-danger'>{error}</div>}
            {success && <div className='alert alert-success'>Category created successfully!</div>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" form="addCategoryForm">{/* Links this submit button to the form in the modal with the id 'addCategoryForm' */}
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCategoryModal;