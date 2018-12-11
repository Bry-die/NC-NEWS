import React from "react";
import { Link } from "@reach/router";

const Nav = ({ topics }) => {
  return (
    <>
      <Link to="/" className="Link">
        Articles
      </Link>
      {topics.map(({ slug }) => {
        slug = slug.split("");
        slug[0] = slug[0].toUpperCase();
        slug = slug.join("");
        return (
          <Link key={slug} to={`/topics/${slug}/articles`} className="Link">
            {slug}
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
