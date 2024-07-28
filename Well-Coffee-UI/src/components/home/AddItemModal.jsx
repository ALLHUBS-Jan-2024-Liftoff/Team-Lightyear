import { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

const AddItemModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="itemName">
                <Form.Label>Item Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group as={Col} controlId="itemCategory">
                <Form.Label>Category</Form.Label>
                <Form.Select defaultValue="Select...">
                  <option>Select...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="itemQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" placeholder="Enter quantity" />
              </Form.Group>

              <Form.Group as={Col} controlId="itemPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter price" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="itemLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter location" />
              </Form.Group>
              
              <Form.Group as={Col} controlId="itemPhoto" className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="itemDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Enter description"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddItemModal;