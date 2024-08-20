import { useState } from "react";
import { Card, Row, Col, Button, Container, ListGroup } from "react-bootstrap";
import AmazonAddItem from "./AmazonAddItem";

const AmazonSearchResults = ({ searchResults, setMessage, error, setError }) => {
  const [show, setShow] = useState(false);


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
          <Row>
          <ListGroup variant="flush">
                  <ListGroup.Item>{item.product_star_rating} stars with{" "}
                  {item.product_num_ratings} ratings
    </ListGroup.Item>
              </ListGroup>
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
            
            <AmazonAddItem amazonItem={item} setMessage={setMessage} error={error} setError={setError} />
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
