import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ articles }) => {
  return (
    <div className="main">
      {articles.map(({ article_id, title, author, votes }) => {
        console.log(author, votes);
        return (
          <div className="articleCard">
            <Link
              to={`/articles/${article_id}`}
              key={article_id}
              className="Link"
            >
              {title}
            </Link>
            <h5>{author}</h5>
            <h6>{votes}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleCard;
