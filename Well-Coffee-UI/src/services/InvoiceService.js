import axios from "axios";

const BASEAPIURL = "http://localhost:8080";

export const fetchInvoices = async () => {
    try {
      const response = await axios.get(`${BASEAPIURL}/api/invoice`);
      return response.data;
    } catch (error) {
      console.error("There was an error fetching the invoices!", error);
      throw error;
    }
  };

  export const addInvoice = async (invoiceDate, vendor, invoiceNumber) => {
    try {
      const response = await axios.post(`${BASEAPIURL}/api/invoice/new`, null, {
        params: { invoiceDate, vendor, invoiceNumber },
      });
      return response.data;
    } catch (error) {
      console.error("There was an error creating the invoice!", error);
      throw error;
    }
  };

  export const getAllInvoices = async () => {
    try {
      const response = await axios.get(`${BASEAPIURL}/api/invoice/all`);
      return response.data;
    } catch (error) {
      console.error("There was an error fetching all the invoices!", error);
      throw error;
    }
  };