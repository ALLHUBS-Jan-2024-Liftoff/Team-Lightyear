import { useState, useEffect } from "react";
import { fetchInvoicesByAccountId } from "../../services/InvoiceService";
import { Button, Modal, Accordion, Table } from "react-bootstrap";
import ItemDetail from "./ItemDetails";

const InvoiceHistoryByUser = ({ account, message, setMessage, error, setError }) => {
  const [invoices, setInvoices] = useState([]);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const fetchInvoices = async id => {
    try {
      const data = await fetchInvoicesByAccountId(id);
      setInvoices(data.data);
    } catch (error) {
      setError(true);
      setMessage("There was an error fetching the invoices. Please try again.");
    }
  };

  useEffect(() => {
    fetchInvoices(account.id);
  }, []);

  return (
    <>
      <Button onClick={handleShow} variant="outline-primary">
        View Invoices
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Invoice History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {message && (
          <div
            className={`alert ${
              !error ? "alert-success" : "alert-danger"
            } mt-2`}
          >
            {message}
          </div>
        )}
          <Accordion defaultActiveKey="0">
            {invoices.map(invoice => (
              <Accordion.Item key={invoice.id}>
                <Accordion.Header>
                  Invoice#{invoice.invoiceNumber}
                </Accordion.Header>
                <Accordion.Body>
                  <Table>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Vendor</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{invoice.invoiceDate}</td>
                        <td>{invoice.vendor}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    {/* It is necessary to map over the ordered items in a separate component in order to load the Item. See comments in ItemDetail */}
                    {invoice.orderedItems.map((orderedItem, index) => (
                      <ItemDetail key={orderedItem.id} orderedItem={orderedItem} index={index} itemIdsOrdered={invoice.itemIdsOrdered} setMessage={setMessage} setError={setError} />
                    ))}
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InvoiceHistoryByUser;