import React from "react";
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const Router = () => {
  return (
    <BRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BRouter>
  );
};

export default Router;
