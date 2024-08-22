import { Button, Modal, Card, ListGroup, Row, Col } from "react-bootstrap";

const AmazonInfoCard = ({
  amazonPInfo,
  showCard,
  handleCloseCard,
  message,
  error,
}) => {

  return (
    <Modal
      show={showCard}
      onHide={handleCloseCard}
      size="med"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Amazon Product Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error ? (
          <Card body>
            <p className="alert alert-danger">{message}</p>
          </Card>
        ) : (
          <Card>
            <Card.Header>{amazonPInfo.data.product_title}</Card.Header>
            <Card.Img variant="top" src={amazonPInfo.data.product_photo} />
            <Card.Body>
              <Card.Title>{amazonPInfo.data.product_title}</Card.Title>

              <Row>
                {amazonPInfo.data.product_description !== "" && (
                  <Card.Text as={Col}>
                    {amazonPInfo.data.product_description}
                  </Card.Text>
                )}
                <Card.Text as={Col}>
                  {amazonPInfo.data.product_star_rating} stars with{" "}
                  {amazonPInfo.data.product_num_ratings} ratings
                </Card.Text>
              </Row>
            </Card.Body>
            {amazonPInfo.data.about_product.length !== 0 && (
              <ListGroup variant="flush">
                {amazonPInfo.data.about_product.map((about, index) => (
                  <ListGroup.Item key={index}>{about}</ListGroup.Item>
                ))}
              </ListGroup>
            )}
            <Card.Footer>
              <Row>
                <Button
                  as={Col}
                  variant="primary"
                  onClick={() =>
                    window.open(amazonPInfo.data.product_url, "_blank")
                  }
                >
                  View on Amazon to Order
                  <br />${amazonPInfo.data.product_price}
                </Button>{" "}
                <Card.Text as={Col}>
                  {amazonPInfo.data.product_availability}
                </Card.Text>
              </Row>
            </Card.Footer>
          </Card>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AmazonInfoCard;
