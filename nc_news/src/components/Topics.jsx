import React from "react";
import { Link } from "@reach/router";

const Topics = ({ topics }) => {
  return (
    <div className="main">
      {topics.map(topic => {
        return (
          <div className="main">
            <Link key={topic.slug} to={`/${topic.slug}/article`}>
              {topic.slug}
            </Link>
          </div>
        );
      })}
      <Link to="/topics/createtopic">Create a new topic!</Link>
    </div>
  );
};

export default Topics;
