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
        <Card.Text>{restaurant.deliveryEstimate}</Card.Text>
        <Card.Text>
          <ReactStars count={5} value={3.5} edit={false} isHalf={true} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RestaurantCard;
