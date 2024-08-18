import { useState, useRef } from "react";
import defaultImage from "../../assets/images/no-image.png";
import { Button, Modal, Badge, Card, ListGroup, Form } from "react-bootstrap";
import { updateItem } from "../../services/ItemService";
import DisplayStatusIcon from "../item/ItemStatusIcon";

const ItemCardModal = ({ item }) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    comment: item.comment,
  });

  const handleClose = (e) => {
    setShow(false);
    setFormData({
      comment: formData.comment,
    });
    setMessage("");
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {

  e.preventDefault();
    const newData = {
      comment: formData.comment,
    };

    try {
      await updateItem(item.id, newData);
      setMessage("Item updated successfully");
      setTimeout(() => {
        handleClose();
      }, 1000);
    } catch (error) {
      setMessage("There was an error updating the item. Please try again.");
    }
  };

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        View
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="med"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {item.name}{" "}
            <Badge pill bg="primary">
              {item.quantity}
            </Badge>
            <DisplayStatusIcon item={item} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={item.image || defaultImage} />
            </Card.Body>
            <ListGroup>
              <ListGroup.Item>
                Amazon Product ID: {item.amazonProductId}
              </ListGroup.Item>
            </ListGroup>
            <Form onSubmit={handleSubmit} id="updateItemForm">
              <Form.Group className="mb-3" controlId="itemComment">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter comment"
                  name="comment"
                  onChange={handleChange}
                />
              </Form.Group>
              {message && <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'}`}>{message}</div>}
              <Button
                variant="secondary"
                type="submit"
                form="updateItemForm"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Form>
            <br></br>
            <ListGroup variant="flush" horizontal>
              <ListGroup.Item variant="info">Recent Comments: </ListGroup.Item>
              <ListGroup.Item>{item.comment}</ListGroup.Item>
            </ListGroup>
            {/*             <ListGroup variant='flush'>
              <ListGroup.Item>Description: {item.description}</ListGroup.Item>
              <ListGroup.Item>Location: {item.location}</ListGroup.Item>
              <ListGroup.Item>Item Cost: ${item.price}</ListGroup.Item>
              <ListGroup.Item>Minimum Quantity: {item.minQuantity}</ListGroup.Item>
            </ListGroup> */}
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Go Back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ItemCardModal;
