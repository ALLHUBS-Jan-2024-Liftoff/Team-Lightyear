import { Form, Button, Row, Col, Container, Spinner } from "react-bootstrap";
import { searchAmazon } from "../../../services/AmazonAPIService";

const AmazonSearchForm = ({
  formData,
  setFormData,
  setMessage,
  setError,
  setSearchResults,
  setSuccess,
  loading,
  setLoading,
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
    setLoading(true);

    try {
      const responseData = await searchAmazon(
        formData.searchTerm,
        formData.page
      );
      if (responseData.data.total_products < 1) {
        setMessage("No results found");
        setError(true);
        setSuccess(false);
        handleChange({ name: page, value: 1 });
      } else {
        setSearchResults(responseData);
        setMessage("");
        setError(false);
        setSuccess(true);
        setLoading(false);
      }
    } catch (error) {
      setMessage("There was an error searching for items. Please try again.");
      setError(true);
      setSuccess(false);
      setLoading(false);
    }
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
            {loading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </Col>
          <Col md="auto">
            <Button
              as={Col}
              type="submit"
              onClick={handleSubmit}
              form="AmazonSearchForm"
            >
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
