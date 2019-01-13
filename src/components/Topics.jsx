import React from "react";
import { Link } from "@reach/router";
import TopicCard from "./TopicCard";

const Topics = ({ topics }) => {
  return (
    <div className="main">
      <div className="topicCard">
        <Link to="/topics/createtopic" className="topicLinks">
          Create a new topic!
        </Link>
      </div>
      <TopicCard topics={topics} />
    </div>
  );
};

export default Topics;
