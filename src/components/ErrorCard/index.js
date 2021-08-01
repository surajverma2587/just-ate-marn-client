import Card from "react-bootstrap/Card";

const ErrorCard = ({
  title = "Something went wrong",
  message = "Our dedicated engineers are working hard on fixing this issue. Please try again in some time.",
}) => (
  <div className="vh-100 w-100">
    <div className="position-absolute top-50 start-50 translate-middle text-center w-75">
      <Card className="text-center">
        <Card.Header>
          <h2>Error</h2>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{message}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">⚠️ | ⚠️ | ⚠️</Card.Footer>
      </Card>
    </div>
  </div>
);

export default ErrorCard;
