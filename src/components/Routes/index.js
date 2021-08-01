import { useContext } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import HomePage from "../../pages/HomePage";
import RestaurantsPage from "../../pages/RestaurantsPage";
import CreateRestaurantPage from "../../pages/CreateRestaurantPage";
import RestaurantPage from "../../pages/RestaurantPage";
import LoginPage from "../../pages/LoginPage";
import InvalidPage from "../../pages/InvalidPage";
import { UserContext } from "../../context/UserContext";

const Routes = () => {
  const { currentUser } = useContext(UserContext);
  const history = useHistory();

  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/restaurants">
        <RestaurantsPage />
      </Route>
      <Route exact path="/restaurants/create">
        {currentUser ? <CreateRestaurantPage /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/restaurants/:restaurantId">
        <RestaurantPage />
      </Route>
      <Route exact path="/login">
        {!currentUser ? <LoginPage /> : <InvalidPage />}
      </Route>
    </Switch>
  );
};

export default Routes;
