import { gql, useQuery } from "@apollo/client";

import Restaurants from "../../components/Restaurants";

const RESTAURANTS_QUERY = gql`
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

const RestaurantsPage = () => {
  const { loading, error, data } = useQuery(RESTAURANTS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  return (
    <div className="main-content">
      <Restaurants restaurants={data.restaurants} />
    </div>
  );
};

export default RestaurantsPage;
