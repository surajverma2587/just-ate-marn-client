import ReactStars from "react-rating-stars-component";

import Card from "react-bootstrap/Card";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Card style={{ width: "18rem" }} className="text-center m-2">
      <Card.Link href={`/restaurants/${restaurant.id}`}>
        <Card.Img variant="top" src={restaurant.bannerUrl} />
      </Card.Link>
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <small className="text-muted">{restaurant.deliveryEstimate}</small>
        <div className="d-flex justify-content-center mt-4 mb-2">
          <ReactStars count={5} value={3.5} edit={false} isHalf={true} />
        </div>
        <small className="text-muted">{restaurant.ratings} reviews</small>
      </Card.Body>
    </Card>
  );
};

export default RestaurantCard;
