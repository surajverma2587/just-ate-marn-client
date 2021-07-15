import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Restaurants from "./components/Restaurants";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/restaurants">
        <Restaurants />
      </Route>
    </Switch>
  );
};

export default Routes;
