import UpdateAccountModal from "../account/UpdateAccountModal";
import InvoiceHistory from "../account/InvoiceHistory";
import { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { getAllAccounts } from "../../services/AccountService";

const ManageEmployees = () => {
  const [accounts, setAccounts] = useState([]);

  // This will need to be updated to use an axios call once connected to Java API.
  const handleDelete = (id) => {
    // Logic to handle account deletion
    setAccounts(accounts.filter((account) => account.id !== id));
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const data = await getAllAccounts();
      setAccounts(data);
    } catch (error) {
      setError("There was an error fetching the account data. Please try again.");
    }
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
              <th>Action</th>
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
                  <InvoiceHistory />{' '}
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
