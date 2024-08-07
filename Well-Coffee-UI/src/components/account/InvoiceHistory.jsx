import { useState } from "react";
import { Accordion, Container, Table, Button, Dropdown } from "react-bootstrap";
import React from 'react'
import UpdateAccountModal from '../account/UpdateAccountModal'

const InvoiceHistory = () => {

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

  const vendorJavaTime = invoices.filter(singleVendor =>
    singleVendor.vendor === 'Java Time'
  )

  return (
    <>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            View Invoices
            </Dropdown.Toggle>
                <Dropdown.Menu>
                {invoices.map((invoice) => (
                    <Dropdown.Item key={invoice.accountId} eventKey={invoice.invoiceNumber} onClick={() => {
                        alert('View Invoice data coming soon!')
                    }}>{invoice.accountId}</Dropdown.Item>
                        ))}
                </Dropdown.Menu>
        </Dropdown>
    </>
  )
}

export default InvoiceHistory;