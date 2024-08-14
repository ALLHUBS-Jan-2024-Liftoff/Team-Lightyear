import axios from "axios";

const BASEAPIURL = "http://localhost:8080/api/invoice";

export const fetchInvoices = async () => {
    try {
      const response = await axios.get(`${BASEAPIURL}`);
      return response.data;
    } catch (error) {
      console.error("There was an error fetching the invoices!", error);
      throw error;
    }
  };

  export const addInvoice = async (invoiceDate, vendor, invoiceNumber, orderedItemsList) => {
    try {
      const response = await axios.post(`${BASEAPIURL}/new`, { invoiceDate, vendor, invoiceNumber, orderedItemsList });
      return response.data;
    } catch (error) {
      console.error("There was an error creating the invoice!", error);
      throw error;
    }
  };