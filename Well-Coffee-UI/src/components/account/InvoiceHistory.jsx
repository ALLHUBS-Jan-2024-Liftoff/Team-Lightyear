import { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import React from "react";

const InvoiceHistory = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [invoices] = useState([
    {
      id: 1,
      items: [
        {
          accountId: 301,
          invoiceNumber: 12012,
          invoiceDate: 20101203,
          vendor: "Java Time",
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          accountId: 301,
          invoiceNumber: 14586,
          invoiceDate: 20100618,
          vendor: "The Coffee Fiend",
        },
      ],
    },
  ]);

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
              {invoices.map(
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
              )}
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
