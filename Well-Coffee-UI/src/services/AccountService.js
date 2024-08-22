import axios from "axios";

const BASEAPIURL = "http://localhost:8080";


// Function to create a new account
export const createAccount = async (accountData) => {
  try {
     // POST request to create a new account
    const response = await axios.post(`${BASEAPIURL}/api/manage/new`, accountData);
    return response.data;
  } catch (error) {
    console.error('Error adding account:', error);
    throw error;
  }
};

    // Function to fetch all accounts
    export const getAllAccounts = async () => {
      try {
        // GET request to retrieve all accounts
        const response = await axios.get(`${BASEAPIURL}/api/manage/all`);
        return response.data;
      } catch (error) {
        console.error("There was an error fetching the accounts", error);
        throw error;
      }
    };


    // Function to delete an account
    export const deleteAccount = async (accountId) => {
      try {
        // DELETE request to remove an account
        const response = await axios.delete(`${BASEAPIURL}/api/manage/${accountId}`);
        return response;
      } catch (error) {
        console.error("There was an error deleting the account", error);
        throw error;
      }
    };

    // Function to update an account
    export const updateAccount = async (accountId, accountData) => {
      try {
        // PATCH request to update an account
        const response = await axios.patch(`${BASEAPIURL}/api/manage/${accountId}`, accountData);
        return response.data;
      } catch (error) {
        console.error("There was an error updating the account", error);
        throw error;
      }
    };
    

  

  