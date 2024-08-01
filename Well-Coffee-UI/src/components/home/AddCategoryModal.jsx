import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { createCategory } from '../../services/CategoryService';

const AddCategoryModal = () => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCategoryName(''); // Resets the category name field when modal is closed
    setError(null); // Resets any errors
    setSuccess(false); // Resets the success message
  };

  const handleShow = () => setShow(true);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createCategory(categoryName);
      setSuccess(true); // Sets success state to true and displays a message to the user
      setTimeout(() => {
        handleClose();
      }, 1500); // Closes the modal after 1.5 seconds

    } catch (error) {
      // Error message will be displayed to the user if the category cannot be created
      setError("There was an error creating the category. Please try again.");
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