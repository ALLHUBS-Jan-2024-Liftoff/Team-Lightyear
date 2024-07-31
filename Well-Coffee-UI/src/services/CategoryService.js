import axios from "axios";

const BASEAPIURL = "http://localhost:8080/api/category";

export const createCategory = async (categoryName) => {
  try {
    const response = await axios.post(`${BASEAPIURL}/new`, { name: categoryName });
    return response.data;
  } catch (error) {
    console.error("There was an error creating the category", error);
    throw error;
  }
};