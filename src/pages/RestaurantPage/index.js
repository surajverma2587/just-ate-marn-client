import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import MenuContainer from "../../components/MenuContainer";
import RestaurantDetails from "../../components/RestaurantDetails";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorCard from "../../components/ErrorCard";
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

  const { menu, ...rest } = data.restaurant;

  return (
    <div className="main-content">
      <RestaurantDetails {...rest} />
      <MenuContainer {...menu} />
    </div>
  );
};

export default RestaurantPage;
