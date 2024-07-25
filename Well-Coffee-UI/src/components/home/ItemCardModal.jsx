import { useState } from 'react';
import image from '../../assets/images/coffee.png';
import { Button, Modal, Badge, Card, ListGroup } from 'react-bootstrap';

const ItemCardModal = () => {
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
            Espresso <Badge pill bg='primary'>10</Badge>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={image} />
            </Card.Body>
            <ListGroup variant='flush'>
              <ListGroup.Item>Description: Strong coffee</ListGroup.Item>
              <ListGroup.Item>Location: Shelf A</ListGroup.Item>
              <ListGroup.Item>Item Cost: $2.00</ListGroup.Item>
              <ListGroup.Item>Sell Price: $3.50</ListGroup.Item>
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