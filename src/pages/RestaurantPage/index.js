import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import MenuContainer from "../../components/MenuContainer";
import RestaurantDetails from "../../components/RestaurantDetails";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorCard from "../../components/ErrorCard";
import MainContainer from "../../components/MainContainer";
import { RESTAURANT_QUERY } from "../../graphql/queries";

const RestaurantPage = () => {
  const { restaurantId } = useParams();

  const { loading, error, data } = useQuery(RESTAURANT_QUERY, {
    variables: { restaurantId },
  });

  if (loading) {
    return <LoadingSpinner message="Fetching restaurant details" />;
  }

  if (error) {
    return <ErrorCard />;
  }

  if (!data?.restaurant) {
    return (
      <ErrorCard
        title="Restaurant does not exist"
        message="Please go back to the restaurant page to find the restaurant you are looking for."
      />
    );
  }

  const { menu, ...rest } = data.restaurant;

  return (
    <MainContainer>
      <RestaurantDetails {...rest} />
      <MenuContainer {...menu} />
    </MainContainer>
  );
};

export default RestaurantPage;
