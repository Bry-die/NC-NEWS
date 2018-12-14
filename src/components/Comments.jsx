import React from "react";
import CommentCard from "./CommentCard";
import Dropdown from "react-dropdown";

const Comments = ({
  comments,
  removeComment,
  user,
  currentQuery,
  fetchComments
}) => {
  return (
    <>
      <Dropdown
        options={[
          { value: "created_at", label: "Newest" },
          { value: "votes", label: "Hottest" }
        ]}
        onChange={fetchComments}
        value={currentQuery}
      />
      <CommentCard
        comments={comments}
        removeComment={removeComment}
        user={user}
      />
    </>
  );
};

export default Comments;
