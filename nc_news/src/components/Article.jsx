import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

class Article extends Component {
  state = {
    article: {}
  };
  render() {
    const { article } = this.state;
    return (
      <div className="main">
        <h3>{article.title}</h3>
        <p>{article.body} </p>
        <h4>{article.author}</h4>
        <h5>{article.topic}</h5>
        <h5>{article.comment_count}</h5>
        <h5>{article.votes}</h5>
        <h5>{article.created_at}</h5>
        <Link to={`/articles/${article.article_id}/comments`} className="Link">
          Comments
        </Link>
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticle();
  }
  fetchArticle = () => {
    const { article_id } = this.props;
    api
      .getArticle(article_id)
      .then(article => {
        this.setState({ article });
      })
      .catch(console.log);
  };
}

export default Article;
