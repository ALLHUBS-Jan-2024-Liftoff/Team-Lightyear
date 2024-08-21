import { useState, useEffect } from "react";
import { Table, Button, Modal, Accordion } from "react-bootstrap";
import { fetchInvoices } from "/src/services/InvoiceService.js";
import React from "react";

const InvoiceHistory = () => {
  const [invoices, setInvoices] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/invoice")
      .then((res) => {
        return res.json();
      })
      .then((invoices) => {
        console.log(invoices);
        setInvoices(invoices);
      });
  }, [invoices]);

  return (
    <>
      <div className="d-grid gap-2">
        <Button variant="outline-secondary" size="lg" onClick={handleShow}>
          Invoice History
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invoice History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            {invoices.map((invoice) => (
              <Accordion defaultActiveKey="0">
                <Accordion.Item key={invoice.id}>
                  <Accordion.Header>
                    Invoice#{invoice.invoiceNumber}
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table>
                      <tr>
                        <th>Date</th>
                        <th>Vendor</th>
                      </tr>
                      <td>{invoice.invoiceDate}</td>
                      <td>{invoice.vendor}</td>
                    </Table>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Item#</th>
                          <th>Price</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      {invoice.orderedItems.map((data) => (
                        <tbody>
                          <tr>
                            <td>{data.item}</td>
                            <td>{data.itemCost}</td>
                            <td>{data.quantityOrdered}</td>
                          </tr>
                        </tbody>
                      ))}
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
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
