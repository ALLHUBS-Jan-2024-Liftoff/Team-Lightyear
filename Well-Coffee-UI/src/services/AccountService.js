import axios from "axios";

const BASEAPIURL = "http://localhost:8080/api";


export const createAccount = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    axiosInstance.post(`${BASEAPIURL}/manage`, formData)
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

    export const updateAccount = async (accountId, accountData) => {
      try {
        const response = await axios.patch(`${BASEAPIURL}/manage/${accountId}`, accountData);
        return response.data;
      } catch (error) {
        console.error("There was an error updating the account", error);
        throw error;
      }
    };
    const [message, setMessage] = useState("");


    }
