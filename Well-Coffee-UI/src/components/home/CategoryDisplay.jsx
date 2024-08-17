import { Accordion, Container, Table, Button, Stack } from "react-bootstrap";
import ItemCardModal from "./ItemCardModal";
import UpdateItemModal from "./UpdateItemModal";
import { useState } from "react";
import { deleteItem } from "../../services/ItemService";
import DisplayStatusIcon from "../item/ItemStatusIcon";

const CategoryDisplay = ({ categories, fetchCategories }) => {
  const [message, setMessage] = useState("");

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteItem(itemId);
      setMessage("Item deleted successfully!");
      setTimeout(() => {
        setMessage("");
      }, 1500);
      fetchCategories();
    } catch (error) {
      setMessage("There was an error deleting the item. Please try again.");
      setTimeout(() => {
        setMessage("");
      }, 1500);
    }
  }

  return (
    <>
      <Container className='mt-5'>
        <h1 className='text-center'>Inventory</h1>
        <Accordion alwaysOpen className='mt-4'>
          {categories.length === 0 ? (
            <Accordion.Item>
              <Accordion.Header>No categories available</Accordion.Header>
              <Accordion.Body>
                <div>⬇️</div>
              </Accordion.Body>
            </Accordion.Item>
          ) : ( 
            categories.map((category) => (
              <Accordion.Item key={category.id} eventKey={category.id.toString()}>
                <Accordion.Header>{category.name}</Accordion.Header>
                <Accordion.Body>
                  {category.items.length == 0 ? (
                    <div>No items available</div>
                  ) : (
                    <Table striped bordered hover responsive>  
                      <thead>
                        <tr>
                          <th>Status</th>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Location</th>
                          <th>Quantity</th>
                          <th>Minimum Quantity</th>
                          <th>Item Cost</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item, index) => (
                          <tr key={index}>
                            <td><DisplayStatusIcon item={item} /></td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.location}</td>
                            <td>{item.quantity}</td>
                            <td>{item.minQuantity}</td>
                            <td>${item.price}</td>
                            <td>
                              <ItemCardModal item={item} />{' '}
                              <UpdateItemModal 
                                categories={categories}
                                item={item}
                                fetchCategories={fetchCategories}
                              />{' '}
                              <Button 
                                variant='outline-danger'
                                onClick={() => handleDeleteItem(item.id)}
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            ))
          )}
        </Accordion>
        {message && (
          <div 
            className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'} mt-2`}
          >
            {message}
          </div>
        )}
      </Container>
    </>
  );
} 

export default CategoryDisplay;