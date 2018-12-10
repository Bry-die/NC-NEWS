import React from "react";

const Nav = ({ topics }) => {
  return (
    <div className="nav">
      {topics.map(topic => {
        return <link>{topic}</link>;
      })}
    </div>
  );
};

export default Nav;
