import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ articles }) => {
  return (
    <div className="main">
      {articles.map(({ article_id, title }) => {
        return (
          <div className="articleCard">
            <Link to={`/articles/${article_id}`} key={article_id}>
              {title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleCard;
