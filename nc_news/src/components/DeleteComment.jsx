import React from "react";

const DeleteComment = ({ removeComment, comment_id, author, user }) => {
  if (author === user.username) {
    return <button onClick={() => removeComment(author, comment_id)}>X</button>;
  } else {
    return null;
  }
};

export default DeleteComment;
