import { useState, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { fetchInvoices } from "/src/services/InvoiceService.js"
import React from "react";

const InvoiceHistory = () => {
  const [invoices, setInvoices] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

      useEffect(() => {
        fetch('http://localhost:8080/api/invoice')
          .then(res => {
           return res.json();
          })
          .then(invoices => {
          console.log(invoices);
          setInvoices(invoices);
          })
      }, []);
/*        const getAllInvoices = async () => {
          try {
            const data = await fetchInvoices();
            console.log(invoices)
            setInvoices(invoices);
          } catch (error) {
            setError("There was an error fetching the invoice data. Please try again.");
          }
        }; */

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Invoice History
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invoice History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>Invoice#</th>
                  <th>Date</th>
                  <th>Vendor</th>
                </tr>
              </thead>
      <div>
        {invoices.map((invoice, index) => {
            console.log(invoice)

        }
        )}
      </div>

{/*                {invoices.length === 0 ? (
              <p>No data here!</p>
              ) : (
              invoices.map(invoice => (
               <tbody>
                                    <tr key={invoice.id}>
                                      <td>{invoiceNumber}</td>
                                      <td>{invoiceDate}</td>
                                      <td>{vendor}</td>
                                    </tr>
                                  </tbody>
              ))
              )} */}
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InvoiceHistory;

{/*               {invoices.map(
                (
                  {
                    id,
                    items: [{ accountId, invoiceNumber, invoiceDate, vendor }],
                  },
                  index
                ) => {
                  return (
                    <tbody>
                      <tr key={index}>
                        <td>{invoiceNumber}</td>
                        <td>{invoiceDate}</td>
                        <td>{vendor}</td>
                      </tr>
                    </tbody>
                  );
                }
              )}  */}
