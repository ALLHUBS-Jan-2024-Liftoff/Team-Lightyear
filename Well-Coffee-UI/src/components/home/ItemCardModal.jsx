import { useState } from 'react';
import defaultImage from '../../assets/images/no-image.png';
import { updateItem } from '../../services/ItemService';
import { Button, Modal, Badge, Card, ListGroup, Form } from 'react-bootstrap';

const ItemCardModal = ({ item }) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
    comment: item.comment
    });

  const handleClose = () => {
    setShow(false);
    setFormData({
comment: formData.comment
    });
    setMessage("");
  };

  const handleShow = () => setShow(true);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((oldData) => ({
        ...oldData,
        [name]: value
      }));
    }

      const handleSubmit = async (e) => {
        e.preventDefault();

        const newData = {
        comment: formData.comment
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
            {item.name} <Badge pill bg='primary'>{item.quantity}</Badge>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={item.image || defaultImage} />
            </Card.Body>
            <Form onSubmit={handleSubmit} id="updateItemForm">
                        <Form.Group className="mb-3" controlId="itemComment">
                          <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Enter comment"
                            name="comment"
//                             value={formData.comment}
                            onChange={handleChange}
                          />
                        </Form.Group>
                                  <Button variant="secondary" type="submit" form="updateItemForm" onClick={handleClose}>
                                    Submit
                                  </Button>
                                  </Form>
            <ListGroup variant='flush'>
              <ListGroup.Item>Comment: {formData.comment}</ListGroup.Item>
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