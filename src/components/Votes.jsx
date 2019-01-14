import React from "react";

const Votes = ({ vote, votes, article_id, hasVoted }) => {
  return (
    <div className="votes">
      <button
        onClick={() => vote(1, article_id)}
        className="votingButton"
        disabled={hasVoted}
      >
        Up vote
      </button>
      <h6 className="votesOnArticle">{votes}</h6>
      <button
        onClick={() => vote(-1, article_id)}
        className="votingButton"
        disabled={hasVoted}
      >
        Down vote
      </button>
    </div>
  );
};

export default Votes;
