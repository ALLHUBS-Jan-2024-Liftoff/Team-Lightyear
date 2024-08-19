import { Card, Row, Col, Button, Container } from "react-bootstrap";

const AmazonSearchResults = ({ searchResults, setMessage, setError }) => {
  return (
    <Container className="mt-3">
      <Row>
      {searchResults.data.products.map((item, index) => (
        <Col key={index} md="auto">
        <Card style={{ width: '18rem' }}>
        <Card.Header>{item.product_title}</Card.Header>
        <Card.Img variant="top" src={item.product_photo} />
        <Card.Body>
          <Row>
            {item.product_description !== "" && (
              <Card.Text as={Col}>
                {item.product_description}
              </Card.Text>
            )}
            
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Button
              as={Col}
              variant="primary"
              onClick={() =>
                window.open(item.product_url, "_blank")
              }
            >
              View on Amazon to Order
              <br />{item.product_price}
            </Button>{" "}
            <Card.Text as={Col}>
              {item.product_star_rating} stars with{" "}
              {item.product_num_ratings} ratings
            </Card.Text>
          </Row>
        </Card.Footer>
      </Card>
      </Col>
      ))}
      </Row>
    </Container>
  );
};

export default AmazonSearchResults;
