import { Form, Col, Row, Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";

const OrderFormItemModal = ({
  item,
  orderedItemsList,
  setOrderedItemsList,
  itemFormData,
  setItemFormData,
}) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleAddItemToOrder = itemData => {
    const updateItems = [
      // copy the current items state
      ...orderedItemsList,
      // now you can add a new object to add to the array
      itemData,
    ];
    setOrderedItemsList(updateItems);
  };

  const handleShow = () => {
    setShow(true);
    setItemFormData({
      itemId: item.id,
      price: item.price,
      quantityOrdered: 0,
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setItemFormData({
      ...itemFormData,
      [name]: value,
    });
  };

  const handleClose = () => {
    setShow(false);
    setItemFormData({
      itemId: "",
      price: "",
      quantityOrdered: 0,
    });
    resetMessages();
  };

  const resetMessages = () => {
    setError(null);
    setSuccess(false);
  };

  const handleItemSubmit = e => {
    setSuccess(false);
    setError(null);
    e.preventDefault();
    const itemData = {
      itemId: itemFormData.itemId,
      quantityOrdered: itemFormData.quantityOrdered,
      itemCost: itemFormData.price,
    };
    // Uses the prop function passed from 'HomePage'
    try {
        handleAddItemToOrder(itemData);
        setSuccess(true);
      } catch (error) {
        setError("There was an error creating the item. Please try again.");
        setSuccess(false);
      }
    
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
        Order Item
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form as={Row} onSubmit={handleItemSubmit} id="addItemForm">
            <input type="hidden" name="id" value={item.id} />
            <Form.Group controlId="id">
              <Form.Control type="hidden" name="id" defaultValue={item.id} />
            </Form.Group>
            {/* <Form.Group as={Col} controlId={item.id + "itemStatus"}>
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            name="status"
            value={item.status}
            readOnly
          />
        </Form.Group> */}

            <Form.Group as={Col} controlId={item.id + "itemName"}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={item.name}
                readOnly
                disabled
              />
            </Form.Group>

            <Form.Group as={Col} controlId={item.id + "itemDescription"}>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={item.description}
                readOnly
                disabled
              />
            </Form.Group>

            {/* <Form.Group as={Col} controlId={item.id + "itemAmazonPID"}>
                <Form.Label>Amazon Product ID</Form.Label>
                <Form.Control 
                  type="text"
                  name="amazonPID" 
                  placeholder="No Amazon Product ID Found" 
                  value={item.amazonPID}
                  readOnly
                />
              </Form.Group> */}

            <Form.Group as={Col} controlId={item.id + "itemPrice"}>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                defaultValue={item.price}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId={item.id + "itemQuantity"}>
              <Form.Label>Quantity on Hand</Form.Label>
              <Form.Control
                type="text"
                name="quantity"
                value={item.quantity}
                readOnly
                disabled
              />
            </Form.Group>

            <Form.Group
              as={Col}
              className="mb-3"
              controlId={item.id + "quantityOrdered"}
            >
              <Form.Label>Quantity to Order</Form.Label>
              <Form.Control
                type="number"
                name="quantityOrdered"
                placeholder="0"
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              as={Col}
              type="submit"
              onClick={handleItemSubmit}
              form="addItemForm"
            >
              Add to Order
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OrderFormItemModal;
