import React from "react";

const DeleteComment = ({ removeComment, comment_id, author }) => {
  return <button onClick={() => removeComment(author, comment_id)}>X</button>;
};

export default DeleteComment;
