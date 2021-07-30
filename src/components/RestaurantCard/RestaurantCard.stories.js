import React from "react";

import RestaurantCard from ".";

export default {
  title: "Components/Cards/RestaurantCard",
  component: RestaurantCard,
};

export const Basic = (props) => <RestaurantCard {...props} />;

Basic.args = {
  restaurant: {
    id: "1234",
    bannerUrl:
      "https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    name: "Secret Chow",
    deliveryEstimate: "30-45 mins",
    rating: 4.8,
    ratings: 4836,
  },
};
