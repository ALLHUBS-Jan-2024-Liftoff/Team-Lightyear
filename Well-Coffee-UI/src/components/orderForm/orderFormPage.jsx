import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { fetchItems } from "../../services/ItemService.js";
import {
  fetchCategories,
  createCategory,
} from "../../services/CategoryService.js";
import { OrderFormTable } from "./OrderFormTable.jsx";
import Accordion from "react-bootstrap/Accordion";

const DisplayItems = () => {
  //   const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

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

    const [invoiceFormData, setInvoiceFormData] = useState({
      invoiceDate: "",
      vendor: "",
      invoiceNumber: "",
      orderedItemsList: [
        {
          itemId: "",
          quantityOrdered: "",
          itemCost: "",
        },
      ],
    });

    // This function handles the process of adding a new invoice
    const handleAddInvoice = async newInvoice => {
      setSuccess(false); // Resets success state before a new invoice is added
      setError(null); // Resets error state before a new invoice is added
      try {
        await createInvoice(newInvoice);
        setSuccess(true); // Sets success state to true and displays a message to the user
        fetchCategories();
      } catch (error) {
        // Error message will be displayed to the user if the invoice cannot be created
        setError("There was an error creating the invoice. Please try again.");
        setSuccess(false);
      }
    };

    // This function resets all messages and passes it to the child components
    const resetMessages = () => {
      setError(null);
      setSuccess(false);
    };

    return (
      <Form>
        <Form.Group className="mb-3" controlId="invoiceNumber">
          <Form.Label>Invoice Number:</Form.Label>
          <Form.Control name="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="vendor">
          <Form.Label>Vendor:</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group className="mb-3" controlId="invoiceDate">
          <Form.Label>Date: </Form.Label>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            className="form-control"
          />
        </Form.Group>
        <Container className='mt-5'>
          <h1 className='text-center'>Inventory</h1>
          <Accordion alwaysOpen className='mt-4'>
            <OrderFormTable categories={categories} />
          </Accordion>
        </Container>
      </Form>
    );
  };
};
export default DisplayItems;
