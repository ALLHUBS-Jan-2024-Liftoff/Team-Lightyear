import React from "react";
import UpdateAccountModal from "../account/UpdateAccountModal";
import InvoiceHistory from "../account/InvoiceHistory";
import { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { DummyAccounts } from "/src/assets/dummydata/DummyAccounts";
import axios from "axios";

const ManageEmployees = () => {
  const [accounts, setAccounts] = useState([]);

  // This will need to be updated to use an axios call once connected to Java API.
  const handleDelete = (id) => {
    // Logic to handle account deletion
    setAccounts(accounts.filter((account) => account.id !== id));
  };

   return (
     <>
       <h1>ManageEmployees</h1>
       <Container className="mt-5">
         <h1 className="text-center">Accounts</h1>
         <Table striped bordered hover responsive>
           <thead>
             <tr>
               <th>ID</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email</th>
               <th>Role</th>
               <th>Actions</th>
             </tr>
           </thead>
           <tbody>
             {DummyAccounts.map((account, index) => (
               <tr key={index}>
                 <td>{account.id}</td>
                 <td>{account.first_name}</td>
                 <td>{account.last_name}</td>
                 <td>{account.email}</td>
                 <td>{account.manager}</td>
                 <td>
                   <UpdateAccountModal account={account} /> <InvoiceHistory />
                   <Button
                     variant="outline-danger"
                     onClick={() => handleDelete(account.id)}
                   >
                     Terminate
                   </Button>
                 </td>
               </tr>
             ))}
           </tbody>
         </Table>
       </Container>
     </>
   );
 };

export default ManageEmployees;