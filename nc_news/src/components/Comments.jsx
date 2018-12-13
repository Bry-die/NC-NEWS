import React from "react";
import CommentCard from "./CommentCard";

const Comments = ({ comments, removeComment }) => {
  return <CommentCard comments={comments} removeComment={removeComment} />;
};

export default Comments;
