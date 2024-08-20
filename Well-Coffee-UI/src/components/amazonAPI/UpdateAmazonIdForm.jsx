import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { updateItem } from "../../services/ItemService";

const UpdateAmazonIdForm = ({
  item,
  showForm,
  setShowForm,
  fetchCategories,
  message,
  setMessage,
}) => {
  const [formData, setFormData] = useState({
    amazonProductId: item.amazonProductId,
  });

  const handleCloseForm = () => {
    setShowForm(false);
    setFormData({
      amazonProductId: item.amazonProductId,
    });
    setMessage("");
  };

  // This function uses the spread operator to update the state of formData with new values
  const handleChange = e => {
    setFormData({ amazonProductId: e.target.value });
  };

  // This function handles form submission
  const handleSubmit = async e => {
    e.preventDefault();

    const newData = {
      name: item.name,
      quantity: item.quantity,
      minQuantity: item.minQuantity,
      price: item.price,
      location: item.location,
      description: item.description,
      categoryId: item.categoryId,
      amazonProductId: formData.amazonProductId,
    };

    try {
      await updateItem(item.id, newData);
      setMessage("Item updated successfully!");
      setTimeout(() => {
        handleCloseForm();
        fetchCategories();
      }, 2000);
    } catch (error) {
      setMessage("There was an error updating the item. Please try again.");
    }
  };

  return (
    <Modal
      show={showForm}
      onHide={handleCloseForm}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Update Amazon Product ID</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} id="updateItemForm">
          <Form.Group controlId="amazonProductId">
            <Form.Label>Amazon Product ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Amazon Product ID"
              name="amazonProductId"
              value={formData.amazonProductId}
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" form="updateItemForm">
            Submit
          </Button>
          {message && (
            <div
              className={`alert ${
                message.includes("success") ? "alert-success" : "alert-danger"
              }`}
            >
              <br />
              {message}
            </div>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateAmazonIdForm;
