import RestaurantCard from "../RestaurantCard";
import Title from "../Title";
import FlexContainer from "../FlexContainer";

const Restaurants = ({ restaurants }) => {
  return (
    <div>
      <Title text="Restaurants" />
      <FlexContainer>
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </FlexContainer>
    </div>
  );
};

export default Restaurants;
