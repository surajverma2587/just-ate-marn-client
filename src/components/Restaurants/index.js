import { useContext } from "react";
import Button from "react-bootstrap/Button";

import RestaurantCard from "../RestaurantCard";
import Title from "../Title";
import FlexContainer from "../FlexContainer";
import { UserContext } from "../../context/UserContext";

const Restaurants = ({ restaurants }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <Title text="Restaurants" />
      {currentUser && (
        <div className="w-100 my-4 text-center">
          <Button variant="link" href="/restaurants/create">
            Create Restaurant
          </Button>
        </div>
      )}
      <FlexContainer>
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </FlexContainer>
    </div>
  );
};

export default Restaurants;
