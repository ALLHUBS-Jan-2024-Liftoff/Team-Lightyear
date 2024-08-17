import { Modal, Card, } from "react-bootstrap";

const AmazonErrorCard = ({
  showCard,
  handleCloseCard,
  message,
}) => {

  return (
    <Modal
      show={showCard}
      onHide={handleCloseCard}
      size="med"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
          <Card body>
            <p className="alert alert-danger">{message}</p>
          </Card>
      </Modal.Body>
    </Modal>
  );
};

export default AmazonErrorCard;
