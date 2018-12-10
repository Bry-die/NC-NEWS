import { Router } from "@reach/router";
import React from "react";
import Articles from "./Articles";

const Routes = () => {
  return (
    <Router>
      <Articles path="/" />
      <Articles path="/articles" />
      <Articles path="/topics/:slug/articles" />
    </Router>
  );
};

export default Routes;
