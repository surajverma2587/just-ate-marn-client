import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RestaurantsPage from "./pages/RestaurantsPage";
import CreateRestaurantPage from "./pages/CreateRestaurantPage";
import RestaurantPage from "./pages/RestaurantPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/restaurants">
        <RestaurantsPage />
      </Route>
      <Route exact path="/restaurants/create">
        <CreateRestaurantPage />
      </Route>
      <Route exact path="/restaurants/:restaurantId">
        <RestaurantPage />
      </Route>
    </Switch>
  );
};

export default Routes;
