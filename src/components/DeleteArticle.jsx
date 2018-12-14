import React from "react";

const DeleteArticle = ({ article_id, removeArticle, user, author }) => {
  if (user.username === author) {
    return <button onClick={() => removeArticle(article_id)}>X</button>;
  } else {
    return null;
  }
};

export default DeleteArticle;
