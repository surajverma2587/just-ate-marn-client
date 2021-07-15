import RestaurantCard from "../RestaurantCard";

const Restaurants = ({ restaurants }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {restaurants.map((restaurant) => (
        <RestaurantCard restaurant={restaurant} />
      ))}
    </div>
  );
};

export default Restaurants;
