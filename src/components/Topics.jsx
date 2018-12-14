import React from "react";
import { Link } from "@reach/router";

const Topics = ({ topics }) => {
  return (
    <div className="main">
      {topics.map(topic => {
        return (
          <div className="main" key={topic.slug}>
            <Link to={`/topics/${topic.slug}/articles`}>{topic.slug}</Link>
          </div>
        );
      })}
      <Link to="/topics/createtopic">Create a new topic!</Link>
    </div>
  );
};

export default Topics;
