import { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import React from "react";
import { DummyInvoices } from "/src/assets/dummydata/DummyInvoices"


const InvoiceHistory = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
                   <tbody>
                {DummyInvoices.map((invoice, index) => (
                      <tr key={index}>
                        <td>{invoice.invoice_number}</td>
                        <td>{invoice.invoice_date}</td>
                        <td>{invoice.vendor}</td>
                      </tr>
              ))}
              </tbody>
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
