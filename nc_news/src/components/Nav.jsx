import React from "react";
import { Link } from "@reach/router";

const Nav = ({ topics }) => {
  return (
    <>
      <Link to="/">articles</Link>
      {topics.map(({ slug }) => (
        <Link key={slug} to={`/topics/${slug}/articles`}>
          {slug}
        </Link>
      ))}
      <Link to="/topics" topics={topics}>
        topics
      </Link>
    </>
  );
};

export default Nav;