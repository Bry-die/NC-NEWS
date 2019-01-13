import React from "react";
import DeleteComment from "./DeleteComment";

const CommentCard = ({ comments, removeComment, user }) => {
  return (
    <div className="main">
      {comments.map(({ author, votes, created_at, body, comment_id }) => {
        return (
          <div className="articleCard" key={comment_id}>
            <div className="articleTitle">
              <h5 id="author">{author}</h5>
              <p>{body}</p>
              <h5>{created_at.slice(0, 10)}</h5>
            </div>
            <div className="votes">
              <DeleteComment
                removeComment={removeComment}
                author={author}
                comment_id={comment_id}
                user={user}
              />
              <h6>Votes: {votes}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentCard;
