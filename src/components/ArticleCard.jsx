import React from "react";
import { Link } from "@reach/router";
import DeleteArticle from "./DeleteArticle";

const ArticleCard = ({ articles, removeArticle, user, vote }) => {
  return (
    <div className="main">
      {articles.map(({ article_id, title, author, votes, created_at }) => {
        return (
          <div className="articleCard" key={article_id}>
            <div className="articleTitle">
              <h5 id="author">{author}</h5>
              <Link
                to={`/articles/${article_id}`}
                key={article_id}
                className="Link"
              >
                {title}
              </Link>
              <h5>{created_at.slice(0, 10)}</h5>
            </div>
            <div className="articleVotes">
              <DeleteArticle
                article_id={article_id}
                removeArticle={removeArticle}
                user={user}
                author={author}
              />
              <h6 className="voteNumber">Votes: {votes}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleCard;
