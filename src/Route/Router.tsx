import React from "react";
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BRouter>
  );
};

export default Router;
