import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RestaurantsPage from "./pages/RestaurantsPage";
import CreateRestaurantPage from "./pages/CreateRestaurantPage";
import RestaurantPage from "./pages/RestaurantPage";
import LoginPage from "./pages/LoginPage";

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
      <Route exact path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default Routes;
