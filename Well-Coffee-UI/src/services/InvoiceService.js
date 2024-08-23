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

export const fetchInvoicesByAccountId = async (id) => {
  try {
    const response = await axios.get(`${BASEAPIURL}/account/` + id);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the invoices!", error);
    throw error;
  }
};

export const createInvoice = async invoice => {
  try {
    const response = await axios.post(`${BASEAPIURL}/new`,
      invoice,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error creating the invoice", error);
    throw error;
  }
};
