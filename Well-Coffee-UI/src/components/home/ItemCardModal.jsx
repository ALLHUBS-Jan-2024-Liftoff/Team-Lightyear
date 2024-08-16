import { useState } from 'react';
import defaultImage from '../../assets/images/no-image.png';
import { Button, Modal, Badge, Card, ListGroup } from 'react-bootstrap';

const ItemCardModal = ({ item }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            {item.name} <Badge pill bg='primary'>{item.quantity}</Badge>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={item.image || defaultImage} />
            </Card.Body>
            <ListGroup variant='flush'>
              <ListGroup.Item>Description: {item.description}</ListGroup.Item>
              <ListGroup.Item>Location: {item.location}</ListGroup.Item>
              <ListGroup.Item>Item Cost: ${item.price}</ListGroup.Item>
              <ListGroup.Item>Minimum Quantity: {item.minQuantity}</ListGroup.Item>
            </ListGroup>
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
}

export default ItemCardModal;