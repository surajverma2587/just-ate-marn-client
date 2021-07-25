import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ReactStars from "react-rating-stars-component";

const RestaurantDetails = (props) => {
  return (
    <Card className="text-center m-2 mb-4">
      <Card.Header>
        <h1>{props.name}</h1>
      </Card.Header>
      <Card.Body>
        <div className="mb-4">
          <Image
            src={props.bannerUrl}
            fluid
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
            }}
          />
        </div>
        <div>
          <small className="text-muted">{props.address}</small>
        </div>
        <div>
          <small className="text-muted">{props.postCode}</small>
        </div>
        <p className="mt-4">{props.phoneNumber}</p>
        <Card.Text>{props.email}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{props.deliveryEstimate}</Card.Text>
        <div className="d-flex justify-content-center mt-4 mb-2">
          <ReactStars
            count={5}
            value={props.rating}
            edit={false}
            isHalf={true}
          />
        </div>
        <small className="text-muted">{props.ratings} reviews</small>
      </Card.Body>
    </Card>
  );
};

export default RestaurantDetails;
