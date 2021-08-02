import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ErrorCard = ({ headerTitle, title, message, goBack }) => {
  const history = useHistory();

  return (
    <div className="vh-100 w-100">
      <div className="position-absolute top-50 start-50 translate-middle text-center w-75">
        <Card className="text-center">
          <Card.Header>
            <h2>{headerTitle || "Error"}</h2>
          </Card.Header>
          <Card.Body>
            <Card.Title>{title || "Something went wrong"}</Card.Title>
            <Card.Text>
              {message ||
                "Our dedicated engineers are working hard on fixing this issue. Please try again in some time."}
            </Card.Text>
            {goBack && (
              <div className="w-100 my-4 text-center">
                <Button variant="primary" onClick={() => history.goBack()}>
                  Go Back
                </Button>
              </div>
            )}
          </Card.Body>
          <Card.Footer className="text-muted">⚠️ | ⚠️ | ⚠️</Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorCard;
