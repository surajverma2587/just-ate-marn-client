import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ReactStars from "react-rating-stars-component";

const RestaurantDetails = (props) => {
  return (
    <Card>
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <Image src={props.bannerUrl} fluid />
        <Card.Text>{props.address}</Card.Text>
        <Card.Text>{props.postCode}</Card.Text>
        <Card.Text>{props.phoneNumber}</Card.Text>
        <Card.Text>{props.email}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{props.deliveryEstimate}</Card.Text>
        <Card.Text>
          <ReactStars
            count={5}
            value={props.rating}
            edit={false}
            isHalf={true}
          />
        </Card.Text>
        <Card.Text>{props.ratings} ratings</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RestaurantDetails;
