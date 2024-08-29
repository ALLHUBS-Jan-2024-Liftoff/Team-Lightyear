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

export const getAllItems = async () => {
  try {
    const response = await axios.get(`${BASEAPIURL}/all`);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the items", error);
    throw error;
  }
};

export const getItemById = async (id) => {
  try {
    const response = await axios.get(`${BASEAPIURL}/` + id);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the item", error);
    throw error;
  }
};

export const updateItem = async (itemId, itemData) => {
  try {
    const response = await axios.patch(`${BASEAPIURL}/${itemId}`, itemData);
    return response.data;
  } catch (error) {
    console.error("There was an error updating the item", error);
    throw error;
  }
};

export const deleteItem = async (itemId) => {
  try {
    const response = await axios.delete(`${BASEAPIURL}/${itemId}`);
    return response;
  } catch (error) {
    console.error("There was an error deleting the item", error);
    throw error;
  }
};

export const searchItems = async (searchKey) => {
  try {
    const response = await axios.get(`${BASEAPIURL}/search`, {
      params: { searchKey }
    });
    return response.data;
  } catch (error) {
    console.error("There was an error searching for items", error);
    throw error;
  }
};