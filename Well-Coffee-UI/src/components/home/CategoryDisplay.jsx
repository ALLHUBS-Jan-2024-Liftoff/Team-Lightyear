import { useState } from "react";
import { Accordion, Container, Table, Button } from "react-bootstrap";
import ItemCardModal from "./ItemCardModal";
import UpdateItemModal from "./UpdateItemModal";

const CategoryDisplay = () => {

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