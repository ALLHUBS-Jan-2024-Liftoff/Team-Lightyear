import { useState } from "react";
import { Button } from "react-bootstrap";
import UpdateAmazonIdForm from "./UpdateAmazonIdForm";
import AmazonInfoCard from "./AmazonInfoCard";

const AmazonInfoButtons = ({ item, fetchCategories }) => {
  const [showForm, setShowForm] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowCard = () => {
    fetchAmazonProductInfo(item.amazonProductId);
    setShowCard(true);
  };

  //example of status OK with no data due to bad AmazonPID
  //   {
  //     "status":"OK",
  //     "request_id":"54f1954b-4b4a-4aec-8628-a379b492f6b9",
  //     "parameters":{
  //         "asin":"B07Zasdjkhfusjduskjdhf",
  //         "country":"US"},
  //     "data":{}
  // }
  const fetchAmazonProductInfo = async amazonProductId => {
    try {
      const data = await getAmazonProductInfo(amazonProductId);
      setAmazonPInfo(data);
      //Check if Amazon Product ID is valid
      if (Object.keys(badDummyInfo.data).length === 0) {
        setMessage(
          "Invalid Amazon Product ID. Please correct error and try again."
        );
        console.log(message);
        setError(true);
        setTimeout(() => {
          handleCloseCard();
        }, 3000);
      }
    } catch (error) {
      setMessage(
        "There was an error fetching the Amazon Product data. Please try again."
      );
    }
  };

  return item.amazonProductId === "" ? (
    <>
      <Button variant="outline-secondary" onClick={handleShowForm}>
        Add Amazon PID
      </Button>

      <UpdateAmazonIdForm
        item={item}
        showForm={showForm}
        setShowForm={setShowForm}
        fetchCategories={fetchCategories}
        message={message}
        setMessage={setMessage}
      />
    </>
  ) : (
    <>
      <Button variant="outline-secondary" onClick={handleShowCard}>
        Amazon Info
      </Button>

      <AmazonInfoCard
        showCard={showCard}
        setShowCard={setShowCard}
        message={message}
        setMessage={setMessage}
        error={error}
        setError={setError}
      />
    </>
  );
};

export default AmazonInfoButtons;
