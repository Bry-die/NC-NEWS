import React from "react";

const Votes = ({ vote, votes, article_id }) => {
  return (
    <div className="votes">
      <button onClick={() => vote(1, article_id)}>Up vote</button>
      <h6>{votes}</h6>
      <button onClick={() => vote(-1, article_id)}>Down vote</button>
    </div>
  );
};

export default Votes;
