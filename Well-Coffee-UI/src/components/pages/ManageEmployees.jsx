import UpdateAccountModal from "../account/UpdateAccountModal";
import { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import InvoiceHistory from "/src/components/orderForm/InvoiceHistory.jsx";

const ManageEmployees = () => {
  const [accounts, setAccounts] = useState([]);
  const [message, setMessage] = useState("");

  const handleDeleteAccount = async accountId => {
    try {
      await deleteAccount(accountId);
      setMessage("Account terminated successfully.");
      setTimeout(() => {
        setMessage("");
      }, 1500);
      fetchAccounts();
    } catch (error) {
      setMessage("There was an error deleting the account. Please try again.");
      setTimeout(() => {
        setMessage("");
      }, 1500);
    }
  }

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
      <Container className="mt-5">
        <h1 className="text-center">Employee Accounts</h1>
        <Table striped bordered hover responsive className="mt-3">
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
                <td>{account.manager === true ? "Manager" : "Employee"}</td>
                <td>
                  <UpdateAccountModal account={account} />{' '} 
                  <InvoiceHistory />{' '}
                  <Button
                    variant="outline-danger"
                    onClick={() => handleDeleteAccount(account.id)}
                  >
                    Terminate
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {message && (
          <div
            className={`alert ${
              message.includes("success") ? "alert-success" : "alert-danger"
            } mt-2`}
          >
            {message}
          </div>
        )}
      </Container>
    </>
  );
};

export default ManageEmployees;
