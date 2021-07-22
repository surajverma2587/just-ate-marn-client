import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

import MenuContainer from "../../components/MenuContainer";
import RestaurantDetails from "../../components/RestaurantDetails";

const RESTAURANT_QUERY = gql`
  query Query($restaurantId: ID!) {
    restaurant(id: $restaurantId) {
      id
      name
      address
      postCode
      phoneNumber
      email
      rating
      ratings
      description
      bannerUrl
      deliveryEstimate
      menu {
        id
        drinks {
          id
          name
          price
          description
          imageUrl
        }
        meals {
          id
          name
          price
          description
          imageUrl
        }
        desserts {
          id
          name
          price
          description
          imageUrl
        }
      }
    }
  }
`;

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const { loading, error, data } = useQuery(RESTAURANT_QUERY, {
    variables: { restaurantId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  const { restaurant } = data;
  const { menu, ...restaurantDetailsProps } = restaurant;

  return (
    <Container fluid>
      <RestaurantDetails {...restaurantDetailsProps} />
      <MenuContainer {...restaurant.menu} />
    </Container>
  );
};

export default RestaurantPage;
