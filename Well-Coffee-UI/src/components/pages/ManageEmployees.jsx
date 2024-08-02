import { useState } from "react";
import { Accordion, Container, Table, Button } from "react-bootstrap";
import ItemCardModal from "../home/ItemCardModal";
import UpdateItemModal from "../home/UpdateItemModal";

const ManageEmployees = () => {
  // Sample data for testing purposes:
  const [invoices] = useState([
    {
      accountId: 1562,
      items: [
        {
          invoiceNumber: 12012,
          invoiceDate: 20101203,
          vendor: 'Java Time',
        },
        {
          invoiceNumber: 14586,
          invoiceDate: 20101203,
          vendor: 'The Coffee Fiend',
        }
      ]
    },
    {
      accountId: 1648,
      items: [
        {
          invoiceNumber: 16489,
          invoiceDate: 20110615,
          vendor: 'The Coffee Fiend',
        },
        {
          invoiceNumber: 18499,
          invoiceDate: 20110602,
          vendor: 'Java Time',
        }
      ]
    },
    {
      accountId: 4987,
      items: [
        {
          invoiceNumber: 1546,
          invoiceDate: 20121204,
          vendor: 'Coffee Spot',
        },
        {
          invoiceNumber: 1894,
          invoiceDate: 20130606,
          vendor: 'The Coffee Fiend',
        }
      ]
    }
  ]);

  return (
    <>
    <h1>Manage Employees</h1>
      <Container className='mt-5'>
        <h1 className='text-center'>Order History</h1>
        <Accordion alwaysOpen className='mt-4'>
          {invoices.map((invoice) => (
            <Accordion.Item key={invoice.accountId} eventKey={invoice.accountId.toString()}>
              <Accordion.Header>Employee ID {invoice.accountId}</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Invoice Number</th>
                      <th>Invoice Date</th>
                      <th>Vendor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.invoiceNumber}</td>
                        <td>{item.invoiceDate}</td>
                        <td>{item.vendor}</td>
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

export default ManageEmployees;