import axios from "axios";

const BASEAPIURL = "http://localhost:8080/api/item";

export const createItem = async (item) => {
  try {
    const response = await axios.post(`${BASEAPIURL}/new`, item);
    return response.data;
  } catch (error) {
    console.error("There was an error creating the item", error);
    throw error;
  }
};