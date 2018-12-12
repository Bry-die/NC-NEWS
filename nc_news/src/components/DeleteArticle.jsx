import React from "react";

const DeleteArticle = ({ article_id, removeArticle }) => {
  return <button onClick={() => removeArticle(article_id)}>X</button>;
};

export default DeleteArticle;
