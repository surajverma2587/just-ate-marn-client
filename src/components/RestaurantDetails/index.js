import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ReactStars from "react-rating-stars-component";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

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
        <Text body={props.phoneNumber} size="default" icon={<FaPhoneAlt />} />
        <Text body={props.email} size="default" icon={<FaEnvelope />} />
        <Text body={props.deliveryEstimate} size="default" icon={<FaClock />} />
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
