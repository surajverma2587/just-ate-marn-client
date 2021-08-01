import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      token
      user {
        id
        email
      }
    }
  }
`;

export const CREATE_RESTAURANT = gql`
  mutation Mutation($createRestaurantInput: CreateRestaurantInput!) {
    createRestaurant(input: $createRestaurantInput) {
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
      }
    }
  }
`;
