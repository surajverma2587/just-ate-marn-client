import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const InvalidPage = ({
  title = "Page does not exist",
  message = "This page does not exist. Please go back.",
}) => {
  const history = useHistory();

  const onClick = () => {
    history.goBack();
  };

  return (
    <div className="vh-100 w-100">
      <div className="position-absolute top-50 start-50 translate-middle text-center w-75">
        <Card className="text-center">
          <Card.Header>
            <h2>Invalid Page</h2>
          </Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{message}</Card.Text>
            <div className="w-100 my-4 text-center">
              <Button variant="primary" onClick={onClick}>
                Go Back
              </Button>
            </div>
          </Card.Body>
          <Card.Footer className="text-muted">⚠️ | ⚠️ | ⚠️</Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default InvalidPage;
