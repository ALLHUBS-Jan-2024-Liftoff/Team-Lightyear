import axios from "axios";

const BASEAPIURL = "http://localhost:8080";

export const createAccount = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    axiosInstance.post(`${BASEAPIURL}/api/manage`, formData)
      .then(() => {
        onAdd();
        handleClose();
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error adding account:', error);
        setError('Failed to add account');
        setIsLoading(false);
      });
    }

    export const getAllAccounts = async () => {
      try {
        const response = await axios.get(`${BASEAPIURL}/api/manage/all`);
        return response.data;
      } catch (error) {
        console.error("There was an error fetching the accounts", error);
        throw error;
      }
    };

    export const deleteAccount = async (accountId) => {
      try {
        const response = await axios.delete(`${BASEAPIURL}/api/manage/${accountId}`);
        return response;
      } catch (error) {
        console.error("There was an error deleting the account", error);
        throw error;
      }
    };

    export const updateAccount = async (accountId, accountData) => {
      try {
        const response = await axios.patch(`${BASEAPIURL}/manage/${accountId}`, accountData);
        return response.data;
      } catch (error) {
        console.error("There was an error updating the account", error);
        throw error;
      }
    };