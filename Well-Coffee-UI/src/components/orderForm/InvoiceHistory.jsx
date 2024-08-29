import { useState, useEffect } from "react";
import { Table, Button, Modal, Accordion, Container } from "react-bootstrap";
import { fetchInvoices } from "/src/services/InvoiceService.js";
import ItemDetail from "../managerHome/ItemDetails";
import React from "react";

const InvoiceHistory = ({error, setError, message, setMessage}) => {
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
          <Container>
            {invoices.map((invoice) => (
              <Accordion defaultActiveKey="0" key={invoice.id}>
                <Accordion.Item>
                  <Accordion.Header>
                    Invoice#{invoice.invoiceNumber}
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table>
                      <thead>
                      <tr>
                        <th>Date</th>
                        <th>Vendor</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                      <td>{invoice.invoiceDate}</td>
                      <td>{invoice.vendor}</td>
                      </tr>
                      </tbody>
                    </Table>
                    <Table striped bordered hover>
                      <thead>
                      <tr>
                          <th>Item#</th>
                          <th>Price</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      {invoice.orderedItems.map((orderedItem, index) => (
                      <ItemDetail key={orderedItem.id} orderedItem={orderedItem} index={index} itemIdsOrdered={invoice.itemIdsOrdered} setMessage={setMessage} setError={setError} />
                    ))}
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
          </Container>
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
