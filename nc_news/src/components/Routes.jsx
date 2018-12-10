import { Router } from "@reach/router";
import React from "react";
import Articles from "./Articles";
import Topics from "./Topics";

const Routes = () => {
  return (
    <Router>
      <Articles path="/" />
      <Articles path="/articles" />
    </Router>
  );
};

export default Routes;
