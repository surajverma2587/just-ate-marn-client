import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ReactStars from "react-rating-stars-component";
import FlexContainer from "../FlexContainer";
import Text from "../Text";

import "./RestuarantDetails.css";

const RestaurantDetails = (props) => {
  return (
    <Card className="text-center m-2 mb-4">
      <Card.Header>
        <h1>{props.name}</h1>
      </Card.Header>
      <Card.Body>
        <Image src={props.bannerUrl} className="cover-image" />
        <Text body={`${props.address}, ${props.postCode}`} size="small" />
        <Text
          body={props.phoneNumber}
          size="default"
          icon={["fas", "phone-square-alt"]}
        />
        <Text
          body={props.email}
          size="default"
          icon={["fas", "envelope-square"]}
        />
        <Text
          body={props.deliveryEstimate}
          size="default"
          icon={["fas", "clock"]}
        />
        <FlexContainer>
          <ReactStars
            count={5}
            value={props.rating}
            edit={false}
            isHalf={true}
          />
        </FlexContainer>
        <Text body={`${props.ratings} reviews`} size="small" />
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RestaurantDetails;
