import RestaurantCard from "../RestaurantCard";

const Restaurants = ({ restaurants }) => {
  return (
    <div>
      <div className="form-title">Restaurants</div>
      <div className="d-flex flex-wrap justify-content-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
