import { useState } from 'react';
import { Accordion, Container, Table, Button } from 'react-bootstrap';
import AddAccountModal from './AddAccountModal'; 
import UpdateAccountModal from './UpdateAccountModal';

const AccountsDisplay = () => {
  // Sample data for testing purposes:
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      role: 'Manager',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      role: 'Employee',
    },
    {
      id: 3,
      firstName: 'Emily',
      lastName: 'Johnson',
      email: 'emily.johnson@example.com',
      role: 'Manager',
    },
  ]);

  // This will need to be updated to use an axios call once connected to Java API.
  const handleDelete = (id) => {
    // Logic to handle account deletion
    setAccounts(accounts.filter(account => account.id !== id));
  };

  return (
    <>
      <Container className='mt-5'>
        <h1 className='text-center'>Accounts</h1>
        <Accordion alwaysOpen className='mt-4'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Account List</Accordion.Header>
            <Accordion.Body>
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
                  {accounts.map((account) => (
                    <tr key={account.id}>
                      <td>{account.id}</td>
                      <td>{account.firstName}</td>
                      <td>{account.lastName}</td>
                      <td>{account.email}</td>
                      <td>{account.role}</td>
                      <td>
                        <UpdateAccountModal account={account} />{' '}
                        <Button 
                          variant='outline-danger' 
                          onClick={() => handleDelete(account.id)}
                        >
                          Terminate
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <AddAccountModal />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default AccountsDisplay;
