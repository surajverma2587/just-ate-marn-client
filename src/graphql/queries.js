import { gql } from "@apollo/client";

export const RESTAURANTS_QUERY = gql`
  query Query {
    restaurants {
      id
      name
      bannerUrl
      rating
      ratings
      deliveryEstimate
    }
  }
`;

export const RESTAURANT_QUERY = gql`
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
