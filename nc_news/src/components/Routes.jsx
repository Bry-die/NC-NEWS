import { Router } from "@reach/router";
import React from "react";
import Articles from "./Articles";
import Topics from "./Topics";
import PostTopic from "./PostTopic";

const Routes = ({ topics }) => {
  return (
    <Router>
      <Articles path="/" />
      <Articles path="/articles" />
      <Articles path="/topics/:slug/articles" />
      <Topics path="/topics" topics={topics} />
      <PostTopic path="/topics/createtopic" />
    </Router>
  );
};

export default Routes;
