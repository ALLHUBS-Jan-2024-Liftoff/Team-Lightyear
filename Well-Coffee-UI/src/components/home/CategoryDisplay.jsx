import { useState } from "react";
import { Accordion, Container, Table, Button } from "react-bootstrap";
import ItemCardModal from "./ItemCardModal";
import UpdateItemModal from "./UpdateItemModal";

const CategoryDisplay = () => {
  // Sample data for testing purposes:
  const [categories] = useState([
    {
      id: 1,
      name: 'Coffee',
      items: [
        {
          status: 'Available',
          name: 'Espresso',
          description: 'Strong coffee',
          location: 'Shelf A',
          cost: '$2.00',
          price: '$3.50',
          quantity: 10
        },
        {
          status: 'Low Stock',
          name: 'Latte',
          description: 'Coffee with milk',
          location: 'Shelf B',
          cost: '$2.50',
          price: '$4.00',
          quantity: 5
        }
      ]
    },
    {
      id: 2,
      name: 'Tea',
      items: [
        {
          status: 'Available',
          name: 'Green Tea',
          description: 'Healthy tea',
          location: 'Shelf C',
          cost: '$1.50',
          price: '$2.50',
          quantity: 8
        },
        {
          status: 'Out of Stock',
          name: 'Black Tea',
          description: 'Strong tea',
          location: 'Shelf D',
          cost: '$2.00',
          price: '$3.00',
          quantity: 0
        }
      ]
    },
    {
      id: 3,
      name: 'Snacks',
      items: [
        {
          status: 'Available',
          name: 'Chips',
          description: 'Crunchy potato chips',
          location: 'Shelf E',
          cost: '$1.00',
          price: '$2.00',
          quantity: 20
        },
        {
          status: 'Low Stock',
          name: 'Cookies',
          description: 'Delicious chocolate cookies',
          location: 'Shelf F',
          cost: '$1.50',
          price: '$2.50',
          quantity: 3
        }
      ]
    }
  ]);

  return (
    <>
      <Container className='mt-5'>
        <h1 className='text-center'>Inventory</h1>
        <Accordion alwaysOpen className='mt-4'>
          {categories.map((category) => (
            <Accordion.Item key={category.id} eventKey={category.id.toString()}>
              <Accordion.Header>{category.name}</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover responsive>  
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Location</th>
                      <th>Quantity</th>
                      <th>Item Cost</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.status}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.location}</td>
                        <td>{item.quantity}</td>
                        <td>{item.cost}</td>
                        <td>
                          <ItemCardModal />{' '}
                          <UpdateItemModal />{' '}
                          <Button variant='outline-danger'>Delete</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </>
  );
}

export default CategoryDisplay;