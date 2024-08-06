<<<<<<< HEAD
import { useState } from "react";
import { Accordion, Container, Table, Button, Dropdown } from "react-bootstrap";
import ItemCardModal from "../home/ItemCardModal";
import UpdateItemModal from "../home/UpdateItemModal";
=======
import React from 'react'
import AccountForm from '../account/AccountForm'
import AccountsDisplay from '../account/AccountsDisplay'
import UpdateAccountModal from '../account/UpdateAccountModal'
>>>>>>> origin

const ManageEmployees = () => {

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
<<<<<<< HEAD
    <h1>Manage Employees</h1>
    <h1 className='text-center'>Order History</h1>
    <Container className='mt-5' 
      style={{
        display : 'flex', 
        flex : '1',
        flexDirection: 'row',
        alignItems : 'center', 
        justifyContent : 'center',
        height: '40px',
      }}  >
    <Button onClick={() => {
      alert('View All coming soon!')
    }}>View All</Button>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
            View By Employee
      </Dropdown.Toggle>
        <Dropdown.Menu>
        {invoices.map((invoice) => (
          <Dropdown.Item key={invoice.accountId} eventKey={invoice.accountId.toString()} onClick={() => {
            alert('View By Employee coming soon!')
          }}>{invoice.accountId}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    </Container>
    </>
=======
    <AccountsDisplay />
    </>

>>>>>>> origin
  )
}

export default ManageEmployees;