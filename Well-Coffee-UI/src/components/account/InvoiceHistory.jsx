import { useState } from "react";
import { Accordion, Container, Table, Button, Dropdown, Modal} from "react-bootstrap";
import React from 'react'
import UpdateAccountModal from '../account/UpdateAccountModal'

const InvoiceHistory = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [invoices] = useState([
    {
      id: 1562,
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
//     {
//       id: 1648,
//       items: [
//         {
//           invoiceNumber: 16489,
//           invoiceDate: 20110615,
//           vendor: 'The Coffee Fiend',
//         },
//         {
//           invoiceNumber: 18499,
//           invoiceDate: 20110602,
//           vendor: 'Java Time',
//         }
//       ]
//     },
//     {
//       id: 4987,
//       items: [
//         {
//           invoiceNumber: 1546,
//           invoiceDate: 20121204,
//           vendor: 'Coffee Spot',
//         },
//         {
//           invoiceNumber: 1894,
//           invoiceDate: 20130606,
//           vendor: 'The Coffee Fiend',
//         }
//       ]
//     }
  ]);

  return (
<>
{/*        <Dropdown> */}
{/*             <Dropdown.Toggle variant="success" id="dropdown-basic"> */}
{/*           View Invoices */}
{/*             </Dropdown.Toggle> */}
{/*                  <Dropdown.Menu> */}
{/*                {invoices.map((invoice) => ( */}
{/*                     <Dropdown.Item key={invoice.accountId} eventKey={invoice.invoiceNumber} onClick={() => { */}

{/*                          newWindow.document.body.innerHTML = '<a href="invoiceNumber">{invoice.invoiceNumber}</a>'; */}
{/*                    }}>{invoice.accountId}</Dropdown.Item> */}
{/*                          ))} */}
{/*                  </Dropdown.Menu> */}
{/*          </Dropdown> */}

      <Button variant="secondary" onClick={handleShow}>
        Invoice History
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Invoice History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {invoices.map(invoice =>
               (
                <ul key={invoice.id}>
                <li>Invoice# {invoice.items[0].invoiceNumber}</li>
                <li>Date: {invoice.items[0].invoiceDate}</li>
                <li>Vendor: {invoice.items[0].vendor}</li>
                </ul>
                ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                  </>
         )
}

export default InvoiceHistory;