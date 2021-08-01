import { useQuery } from "@apollo/client";

import Restaurants from "../../components/Restaurants";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorCard from "../../components/ErrorCard";
import { RESTAURANTS_QUERY } from "../../graphql/queries";

const RestaurantsPage = () => {
  const { loading, error, data } = useQuery(RESTAURANTS_QUERY);

  if (loading) {
    return <LoadingSpinner message="Fetching restaurants" />;
  }

  if (error) {
    return <ErrorCard />;
  }

  return (
    <div className="main-content">
      <Restaurants restaurants={data.restaurants} />
    </div>
  );
};

export default RestaurantsPage;
