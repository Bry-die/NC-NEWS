import { Router } from "@reach/router";
import React from "react";
import Articles from "./Articles";
import Topics from "./Topics";
import PostTopic from "./PostTopic";
import Article from "./Article";
import PostArticle from "./PostArticle";
import Error from "./Error";

const Routes = ({ topics, user }) => {
  return (
    <Router>
      <Articles path="/" user={user} />
      <Articles path="/articles" user={user} />
      <Articles path="/topics/:slug/articles" user={user} />
      <PostArticle path="/topics/:slug/articles/postarticle" user={user} />
      <Topics path="/topics" topics={topics} />
      <PostTopic path="/topics/createtopic" />
      <Article path="/articles/:article_id" user={user} />
      <Error path="/error" />
    </Router>
  );
};

export default Routes;
