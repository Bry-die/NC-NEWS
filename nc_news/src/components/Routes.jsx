import { Router } from "@reach/router";
import React from "react";
import Articles from "./Articles";
import Topics from "./Topics";
import PostTopic from "./PostTopic";
import Article from "./Article";
import Comments from "./Comments";
import PostArticle from "./PostArticle";

const Routes = ({ topics, user }) => {
  return (
    <Router>
      <Articles path="/" />
      <Articles path="/articles" />
      <Articles path="/topics/:slug/articles" />
      <PostArticle path="/topics/:slug/articles/postarticle" user={user} />
      <Topics path="/topics" topics={topics} />
      <PostTopic path="/topics/createtopic" />
      <Article path="/articles/:article_id" />
      <Comments path="/articles/:article_id/comments" />
    </Router>
  );
};

export default Routes;
