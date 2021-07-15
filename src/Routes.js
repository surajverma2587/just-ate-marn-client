import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RestaurantsPage from "./pages/RestaurantsPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/restaurants">
        <RestaurantsPage />
      </Route>
    </Switch>
  );
};

export default Routes;
