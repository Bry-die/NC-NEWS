import React from "react";
import { Link } from "@reach/router";

const TopicCard = ({ topics }) => {
  return (
    <div>
      {topics.map(topic => {
        return (
          <div className="topicCard" key={topic.slug}>
            <Link className="topicLinks" to={`/topics/${topic.slug}/articles`}>
              {topic.slug}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default TopicCard;
