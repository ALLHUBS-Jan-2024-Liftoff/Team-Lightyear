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
  }, []);

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
            {/*             <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>Invoice#</th>
                  <th>Date</th>
                  <th>Vendor</th>
                </tr>
              </thead> */}
            {invoices.map((invoice) => (
              // console.log(invoice);
              <Accordion defaultActiveKey="0">
                <Accordion.Item key={invoice.id}>
                  <Accordion.Header>
                    Invoice#{invoice.invoiceNumber}
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table bordered hover responsive>
                      <tr>
                        <th>Date</th>
                        <th>Vendor</th>
                      </tr>
                        <td>{invoice.invoiceDate}</td>
                        <td>{invoice.vendor}</td>
                      <tr>
                        <th>Items Ordered</th>
                      
                        {/* {invoices.invoice.map((itemsOrdered) => (
                          console.log(itemsOrdered)
                        ))} */}
                      </tr>
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
