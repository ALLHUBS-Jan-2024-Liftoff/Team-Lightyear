import { useState, useEffect } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

const AddItemModal = ({ onAddItem, resetMessages, error, success, categories }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    minQuantity: "",
    price: "",
    location: "",
    description: "",
    categoryId: ""
  });

  const handleClose = () => {
    setShow(false);
    setFormData({
      name: "",
      quantity: "",
      minQuantity: "",
      price: "",
      location: "",
      description: "",
      categoryId: ""
    });
    resetMessages();
  };

  const handleShow = () => {
    setShow(true);
  };

  // This function uses the spread operator to update the state of a specific field in formData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // This function handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

      const itemData = {
        categoryId: formData.categoryId,
        name: formData.name,
        quantity: formData.quantity,
        minQuantity: formData.minQuantity,
        price: formData.price,
        location: formData.location,
        description: formData.description
      };
      // Uses the prop function passed from 'HomePage'
      await onAddItem(itemData);
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
        New Item
      </Button>

      <Modal 
        show={show} 
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} id="addItemForm">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="itemName">
                <Form.Label>Item Name</Form.Label>
                <Form.Control 
                  type="text"
                  name="name" 
                  placeholder="Enter name" 
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="itemCategory">
                <Form.Label>Category</Form.Label>
                <Form.Select 
                  name="categoryId"
                  value={formData.categoryId}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="itemQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control 
                  type="text"
                  name="quantity"
                  placeholder="Enter quantity"
                  value={formData.quantity}
                  onChange={handleChange} 
                />
              </Form.Group>

              <Form.Group as={Col} controlId="itemMinQuantity">
                <Form.Label>Minimum Quantity to Have On Hand</Form.Label>
                <Form.Control 
                  type="text"
                  name="minQuantity"
                  placeholder="Enter minimum quantity"
                  value={formData.minQuantity}
                  onChange={handleChange} 
                />
              </Form.Group>

              <Form.Group as={Col} controlId="itemPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control 
                  type="text" 
                  name="price"
                  placeholder="Enter price" 
                  value={formData.price}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="itemLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control 
                  type="text"
                  name="location"
                  placeholder="Enter location"
                  value={formData.location}
                  onChange={handleChange} 
                />
              </Form.Group>
              
              <Form.Group as={Col} controlId="itemPhoto" className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="itemDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={2}
                name="description"
                placeholder="Enter description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
            {error && <div className='alert alert-danger'>{error}</div>}
            {success && <div className='alert alert-success'>Item created successfully!</div>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" form="addItemForm">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddItemModal;