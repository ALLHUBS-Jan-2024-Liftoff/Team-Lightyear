import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { getAllCategories } from "../../services/CategoryService.js";
import OrderFormTable from "./OrderFormTable.jsx";
import Accordion from "react-bootstrap/Accordion";
import { createInvoice } from "../../services/InvoiceService.js";
import InvoiceHistory from "./InvoiceHistory.jsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DisplayOrderForm = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [orderedItemsList, setOrderedItemsList] = useState([]);
  const [invoiceFormData, setInvoiceFormData] = useState({
    invoiceDate: startDate,
    vendor: "",
    invoiceNumber: "",
  });
  const [itemFormData, setItemFormData] = useState({
    itemId: "",
    price: "",
    quantityOrdered: 0,
  });

  // const [validated, setValidated] = useState(false);

  // This hook calls fetchCategories to retrieve and display initial data
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch (error) {
      setError(
        "There was an error fetching the category data. Please try again."
      );
    }
  };

  // This function uses the spread operator to update the state of a specific field in formData
  const handleChange = e => {
    const { name, value } = e.target;
    setInvoiceFormData({
      ...invoiceFormData,
      [name]: value,
    });
  };

  //This function handles a date change
  const handleDateChange = invDate => {
    setStartDate(invDate);
    setInvoiceFormData({
      ...invoiceFormData,
      invoiceDate: invDate,
    });
    console.log(invoiceFormData);
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        handleRefresh();
      }, 1000); // Resets order form after 1 second
    }
  }, [success]);

  const handleRefresh = () => {
    setInvoiceFormData({
      invoiceDate: new Date().toISOString().split("T")[0],
      vendor: "",
      invoiceNumber: "",
    });
    setItemFormData({
      itemId: "",
      price: "",
      quantityOrdered: 0,
    });
    setOrderedItemsList([]);
    resetMessages();
  };

  // This function handles form submission
  const handleSubmit = async event => {
    event.preventDefault();
    if (
      invoiceFormData.vendor === "" ||
      (invoiceFormData.invoiceNumber === "") | (orderedItemsList.length === 0)
    ) {
      setError("Please complete required fields.");
    } else {
      const invoiceData = {
        invoiceDate: invoiceFormData.invoiceDate,
        vendor: invoiceFormData.vendor,
        invoiceNumber: invoiceFormData.invoiceNumber,
        orderedItemsList: orderedItemsList,
      };
      await handleAddInvoice(invoiceData);
    }
  };

  // This function handles the process of adding a new invoice
  const handleAddInvoice = async addInvoice => {
    setSuccess(false); // Resets success state before a new invoice is added
    setError(null); // Resets error state before a new invoice is added
    try {
      await createInvoice(addInvoice);
      setSuccess(true); // Sets success state to true and displays a message to the user
      setMessage("Invoice created successfully!")
      fetchCategories();
    } catch (error) {
      // Error message will be displayed to the user if the invoice cannot be created
      setError("There was an error creating the invoice. Please try again.");
      setSuccess(false);
    }
  };

  const resetMessages = () => {
    setError(null);
    setSuccess(false);
  };

  return (
    <>
      <Container className="mt-5">
        <h1 className="text-center">Create an Invoice</h1>
        <Form className="mt-4" onSubmit={handleSubmit} id="orderForm">
        {message && (
          <div
            className={`alert ${
              !error ? "alert-success" : "alert-danger"
            } mt-2`}
          >
            {message}
          </div>
        )}
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="invoiceNumber">
              <Form.Label>Invoice Number:</Form.Label>
              <Form.Control
                type="text"
                name="invoiceNumber"
                placeholder="Enter Invoice Number"
                value={invoiceFormData.invoiceNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="vendor">
              <Form.Label>Vendor:</Form.Label>
              <Form.Control
                type="text"
                name="vendor"
                placeholder="Enter Vendor Name"
                value={invoiceFormData.vendor}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="invoiceDate">
              <label htmlFor="invoiceDate">Date: </label>
              <br />
              <DatePicker
                showIcon
                id="invoiceDate"
                name="invoiceDate"
                dateFormat="yyyy-MM-dd"
                closeOnScroll={true}
                selected={startDate}
                onChange={date =>
                  handleDateChange(date.toISOString().split("T")[0])
                }
                todayButton="Today"
              />
            </Form.Group>
            </Row>
            <Button
              type="submit"
              onClick={handleSubmit}
              form="orderForm"
            >
              Submit Order
            </Button>

        </Form>
      </Container>
      <Container className="mt-5">
        <h2 className="text-center">Items Available to Order</h2>
        <Accordion alwaysOpen className="mt-4">
          <OrderFormTable
            categories={categories}
            orderedItemsList={orderedItemsList}
            setOrderedItemsList={setOrderedItemsList}
            itemFormData={itemFormData}
            setItemFormData={setItemFormData}
          />
        </Accordion>
        <br></br>
        <InvoiceHistory error={error} setError={setError} message={message} setMessage={setMessage} />
      </Container>
    </>
  );
};
export default DisplayOrderForm;