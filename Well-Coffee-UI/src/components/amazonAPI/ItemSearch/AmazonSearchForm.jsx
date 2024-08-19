import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { searchAmazon } from "../../../services/AmazonAPIService";

const AmazonSearchForm = ({
  formData,
  setFormData,
  setMessage,
  setError,
  setSearchResults,
}) => {
  // This function uses the spread operator to update the state of formData with new values
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value,
    }));
  };

  // This function handles form submission
  const handleSubmit = async e => {
    e.preventDefault();
    setMessage("");
    setError(false);

    // try {
    //   const responseData = await searchAmazon(formData.searchTerm, formData.page);
    //   if (responseData.data.total_products < 1) {
    //     setMessage("No results found");
    //     setError(true);
    //     handleChange({ name: page, value: 1 });
    //   } else {
    //     setSearchResults(responseData);
    //   }
    //   setTimeout(() => {
    //     setMessage("");
    //     setError(false);
    //   }, 10000);
    // } catch (error) {
    //   setMessage("There was an error searching for items. Please try again.");
    //   setError(true);
    // }
  };

  return (
      <Container className="mt-3">
        <Form onSubmit={handleSubmit} id="AmazonSearchForm">
          <Row>
            <Col>
              <Form.Group controlId="searchTerm">
                <Form.Control
                  type="text"
                  placeholder="Enter search term"
                  name="searchTerm"
                  value={formData.searchTerm}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            {/* Future version - PrevPageButton */}
            <Col md="auto">
              <Button as={Col} type="submit" form="AmazonSearchForm">
                Submit
              </Button>
            </Col>
            {/* Future version - NextPageButton */}
          </Row>
        </Form>
      </Container>
  );
};

export default AmazonSearchForm;
