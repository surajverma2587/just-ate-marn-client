import ReactStars from "react-rating-stars-component";
import Card from "react-bootstrap/Card";

import Text from "../Text";
import FlexContainer from "../FlexContainer";

import "./RestaurantCard.css";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Card className="card-container">
      <Card.Link href={`/restaurants/${restaurant.id}`}>
        <Card.Img variant="top" src={restaurant.bannerUrl} />
      </Card.Link>
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Text body={restaurant.deliveryEstimate} size="small" />
        <FlexContainer>
          <ReactStars
            count={5}
            value={restaurant.rating}
            edit={false}
            isHalf={true}
          />
        </FlexContainer>
        <Text body={`${restaurant.ratings} reviews`} size="small" />
      </Card.Body>
    </Card>
  );
};

export default RestaurantCard;
