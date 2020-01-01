import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import TodosPage from "../todo/pages/Todos";

const Routes = () => (
  <Switch>
    <Route exact component={TodosPage} path="/" />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
