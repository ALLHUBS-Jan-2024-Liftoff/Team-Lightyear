import { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { updateItem } from '../../services/ItemService';

const UpdateItemModal = ({ categories, item, fetchCategories }) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    location: item.location,
    description: item.description,
    categoryId: item.categoryId
  });

  const handleClose = () => {
    setShow(false);
    setFormData({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      location: item.location,
      description: item.description,
      categoryId: item.categoryId
    });
    setMessage("");
  };

  const handleShow = () => {
    setShow(true);
  };

  // This function uses the spread operator to update the state of formData with new values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value
    }));
  }

  // This function handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      name: formData.name,
      quantity: formData.quantity,
      price: formData.price,
      location: formData.location,
      description: formData.description,
      categoryId: formData.categoryId
    };

    try {
      await updateItem(item.id, newData);
      setMessage("Item updated successfully!");
      fetchCategories();
      setTimeout(() => {
        handleClose();
      }, 1000);
    } catch (error) {
      setMessage("There was an error updating the item. Please try again.");
    }
  };

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        Update
      </Button>

      <Modal 
        show={show} 
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} id="updateItemForm">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="itemName">
                <Form.Label>Item Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter name" 
                  name="name"
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
                  {categories.map((category) => (
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
                  placeholder="Enter quantity" 
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="itemPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter price"
                  name="price"
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
                  placeholder="Enter location" 
                  name="location"
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
                placeholder="Enter description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
            {message && <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'}`}>{message}</div>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" form="updateItemForm">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateItemModal;