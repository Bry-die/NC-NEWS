import React from "react";

const CommentCard = ({ comments }) => {
  return (
    <div className="main">
      {comments.map(({ author, votes, created_at, body }) => {
        return (
          <div className="articleCard">
            <div className="articleTitle">
              <h5 id="author">{author}</h5>
              <p>{body}</p>
              <h5>{created_at.slice(0, 10)}</h5>
            </div>
            <div className="votes">
              <h6>{votes}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

{
  /* <>
  {comments.map(({ votes, created_at, author, body, comment_id }) => {
    return (
      <>
        <h5>{author}</h5>
        <h6>{created_at}</h6>
        <p>{body}</p>
        <h6>{votes}</h6>
      </>
    );
  })}
</>; */
}

export default CommentCard;
