import React from "react";

const ArticleCard = ({ articles }) => {
  return (
    <div className="main">
      <ul>
        {articles.map(({ article_id, title }) => {
          return (
            <div className="articleCard">
              <li key={article_id}>{title}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleCard;
