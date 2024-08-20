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

    const [message, setMessage] = useState("");

