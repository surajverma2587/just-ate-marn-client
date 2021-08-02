import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = ({ message }) => (
  <div className="vh-100 w-100">
    <div className="position-absolute top-50 start-50 translate-middle text-center">
      <Spinner animation="border" role="status" />
      <div className="p-2">{message || "Please wait"}</div>
    </div>
  </div>
);

export default LoadingSpinner;
