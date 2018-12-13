import React from "react";
import CommentCard from "./CommentCard";

const Comments = ({ comments, removeComment, user }) => {
  return (
    <CommentCard
      comments={comments}
      removeComment={removeComment}
      user={user}
    />
  );
};

export default Comments;
