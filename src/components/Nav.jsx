import React from "react";
import { Link } from "@reach/router";

const Nav = ({ topics }) => {
  return (
    <>
      <Link to="/" className="Link">
        Articles
      </Link>
      {topics.map(({ slug }) => {
        let topicsLink = slug.split("");
        topicsLink[0] = topicsLink[0].toUpperCase();
        topicsLink = topicsLink.join("");
        return (
          <Link key={slug} to={`/topics/${slug}/articles`} className="Link">
            {topicsLink}
          </Link>
        );
      })}
      <Link to="/topics" topics={topics} className="Link">
        Topics
      </Link>
    </>
  );
};

export default Nav;
